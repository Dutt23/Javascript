export const spatial_grid = (() =>{

class SpatialGridSlow {

  constructor(bounds, dimensions){
    this._bounds = bounds;
    this._dimensions = dimensions;
    this._cells = new Map();
  }

  NewClient (position, dimensions) {
    const [x, y] = position;
    const [w, h] = dimensions;

    const client = {
      position,
      dimensions,
      indices: null
    }

    this._Insert(client);
    return client;
  }

  _Remove(client){

    const [ minIndexes, maxIndexes]  = client.indices;

    for(let i = minIndexes[0]; i <= maxIndexes[0]; ++i){
      for(let j = minIndexes[1]; j <= maxIndexes[1]; ++j){
        const key = this._GetKey(i, j)
          this._cells[key].delete(client)
      }
    }
  }

  UpdateClient(client){
    this._Remove(client);
    this._Insert(client);
  }

  FindNear(position, dimensions) {
    const [x, y] = position;
    const [w, h] = dimensions;

    const clients = new Set();

    const minIndexes = this._GetIndex(x - w / 2, y - h/2);
    const maxIndexes = this._GetIndex(x + w/ 2, y + h/2);

    for(let i = minIndexes[0]; i <= maxIndexes[0]; ++i){
      for(let j = minIndexes[1]; j <= maxIndexes[1]; ++j){
        const key = this._GetKey(i, j);
        if(key in this._cells){
          for(let v of this._cells[key]){
            clients.add(v);
          }
        }
      }
    }
  }

  _Insert(client) {
    const [x, y] = client.position;
    const [w, h] = client.dimensions;

    const minIndexes = this._GetIndex(x - w / 2, y - h/2);
    const maxIndexes = this._GetIndex(x + w/ 2, y + h/2);

    client.indices = [minIndexes, maxIndexes];
    for(let i = minIndexes[0]; i <= maxIndexes[0]; ++i){
      for(let j = minIndexes[1]; j <= maxIndexes[1]; ++j){
        const key = this._GetKey(i, j)
        if(!(key in this._cells)) {
          this._cells[key] = new Set();
        }
          this._cells[key].add(client)
      }
    }
  }

  _GetKey(x, y){
    return x +'.'+y;
  }
  _GetIndex(x, y){

    const xCor = Math.min( Math.max( (x - this._bounds[0][0]) / (this._bounds[1][0] - this._bounds[0][0]), 0.0), 1.0)
    const yCor = Math.min( Math.max( (y - this._bounds[0][1]) / (this._bounds[1][1] - this._bounds[0][1]), 0.0), 1.0)

    const xIndex = Math.floor(xCor * (this._dimensions[0] - 1));
    const yIndex = Math.floor(yCor * (this._dimensions[1] - 1));

    return [xIndex, yIndex]
  }

}


class SpatialGridFast {

  constructor(bounds, dimensions){
    this._bounds = bounds;
    this._dimensions = dimensions;
    const [x, y] = dimensions;
    this._cells = [...Array(x)].map(_ => [...Array(y)].map(_=> null))
    this.queryIds = 0;
  }

  NewClient (position, dimensions) {
    const client = {
      position,
      dimensions,
      _cells: {
        min: null,
        max: null,
        nodes: null,
      },
      queryId: -1
    }

    this._Insert(client);
    return client;
  }

  _Remove(client){

    const minIndexes = client._cells.min;
    const maxIndexes = client._cells.max;

    for(let i = minIndexes[0]; i <= maxIndexes[0]; i++){
      for(let j = minIndexes[1]; j <= maxIndexes[1]; j++){
        const xi = i - minIndexes[0];
        const yi = j - minIndexes[1];
        const node = client._cells.nodes[xi][yi];

        if(node.next){
          node.next.prev = node.prev
        }
        if(node.prev){
          node.prev.next = node.next
        }
        if (!node.prev) {
          this._cells[i][j] = node.next;
        }
      }
    }
    client._cells.nodes = null;
    client._cells.min = null;
    client._cells.max = null;
  }

  UpdateClient(client){

    const [x, y] = client.position;
    const [w, h] = client.dimensions;
  
      const i1 = this._GetIndex(x - w / 2, y - h / 2);
      const i2 = this._GetIndex(x + w / 2, y + h / 2);
  
      if (client._cells.min[0] == i1[0] &&
          client._cells.min[1] == i1[1] &&
          client._cells.max[0] == i2[0] &&
          client._cells.max[1] == i2[1]) {
        return;
      }
    this._Remove(client);
    this._Insert(client);
  }

  FindNear(position, dimensions) {  
    const [x, y] = position;
    const [w, h] = dimensions;

    const clients = [];

    const queryId = this.queryIds++;
    const minIndexes = this._GetIndex(x - w / 2, y - h/2);
    const maxIndexes = this._GetIndex(x + w/ 2, y + h/2);

    for(let i = minIndexes[0]; i <= maxIndexes[0]; ++i){
      for(let j = minIndexes[1]; j <= maxIndexes[1]; ++j){
       let head = this._cells[i][j];
        
       while(head){
         const v = head.client;
         head = head.next;
        if(v.queryId != queryId) {
          v.queryId = queryId
          clients.push(v);
        }
       }
      }
    }
    return clients;
  }

  _Insert(client) {
    const [x, y] = client.position;
    const [w, h] = client.dimensions;

    const minIndexes = this._GetIndex(x - w / 2, y - h/2);
    const maxIndexes = this._GetIndex(x + w/ 2, y + h/2);

    const nodes = [];
    for(let i = minIndexes[0]; i <= maxIndexes[0]; ++i){
      nodes.push([]);
      for(let j = minIndexes[1]; j <= maxIndexes[1]; ++j){
        const xi = i - minIndexes[0];
        
        const head = {
          next: null,
          prev: null,
          client,
        }
        nodes[xi].push(head);
        
        head.next = this._cells[i][j];
        if(this._cells[i][j]){
          this._cells[i][j].prev = head;
        }
        this._cells[i][j] = head;
      }
    }

    client._cells.min = minIndexes
    client._cells.max = maxIndexes
    client._cells.nodes = nodes;
  }

  _GetKey(x, y){
    return x +'.'+y;
  }
  sat = (x) => Math.min(Math.max(x, 0.0), 1.0);
  
  _GetIndex(x, y){

    const xCor = this.sat((x - this._bounds[0][0]) / (this._bounds[1][0] - this._bounds[0][0]));
    const yCor = this.sat((y - this._bounds[0][1]) / (this._bounds[1][1] - this._bounds[0][1]));

    const xIndex = Math.floor(xCor * (this._dimensions[0] - 1));
    const yIndex = Math.floor(yCor * (this._dimensions[1] - 1));

    return [xIndex, yIndex]
  }

}

return {
  SpatialHash_Slow: SpatialGridSlow,
  SpatialHash_Fast: SpatialGridFast
}
})();