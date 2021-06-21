

var string = "355385"

function text(input) {
    const { max, ...counts } = Array.from(input).reduce((acc, char) => {
        acc[char] = acc[char] ? acc[char] + 1 : 1;
        acc['max'] = acc[char] > acc['max'] ? acc[char] : acc['max']
        return acc;
    }, { max: 0 })
    return Object.entries(counts).filter(([k, v]) => v === max);
}

const flatten = function (arr, result = []) {
    for (var i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (Array.isArray(value)) {
            flatten(value, result)
        }
        else
            result.push(value)
    }
    return result;
};

const delay = (m) => new Promise(resolve => setTimeout(resolve, m));

const print = async (num) => {
    for (let i = 1; i <= num; i++) {
        await delay(Math.random() * 1000);
        console.log(i);
    }
};


const removeDup = (str) => {
var set = new Set();
Array.from(str).forEach( s => set.add(s))
console.log(set)
}

const once = (arr) =>
{
    let xor = 0
for(let i = 0; i < arr.length;i++)
{
    xor ^= arr[i];
}
console.log(xor)
}

const twoStrings = (str1, str2) =>
{
    let xor = ""
    xor = str1 ^ str2

console.log(xor)
}

const permute = (prefix, str) =>{
    // let n = str.length;
    // console.log(str.substring(0, 0) + str.substring(0+1, n))
    let n = str.length;
    if (n == 0) console.log(prefix);
    else {
        for (let i = 0; i < n; i++)
            permute(prefix + str.charAt(i), str.substring(0, i) + str.substring(i+1, n));
    }
}

// print(10);
// removeDup("aaaaabbbbb")
// console.log(text(string))
// console.log(flatten([2, 2, 5, [5, [5, [6]], 7]]))
// console.log(once([1,5,6,2,1,6,4,10,3,2,5,3]))
// twoStrings("india is great", "in")
// permute("","123")

"abcdabcd" 
"cdab"



var obj = [{
    "name":"a",
    "score": 1
}, {
    "name":"b",
    "score": 0
}
, {
    "name":"c",
    "score": 0
}
, {
    "name":"a",
    "score": 0
}
, {
    "name":"b",
    "score": 1
}]

const passOrFail = () =>{
    var failMap = {}
    var set = new Set();
    obj.forEach((p)=>{

        if(p.score ==1)
        console.log("Pass :"+ p.name)
        // if(failMap[p["name"]])
        // {
        //     failMap[p["name"]] = failMap[p["name"]] + p.score
        // }
        // else
        // failMap[p["name"]] = p.score
    })

    // console.log(failMap)
}

// passOrFail();

const https = require('https');
function getResults(limit) {
    let arr = [];
    apiCall(277)
}

async function apiCall(page, arr){
    
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?page=${page}`;
    let resp;
    const request = await https.request(url, (response) => {
        let data = ''
            response.on('data', (chunk)=> { // data is event name here
            data = data + chunk.toString();
        })
    
        response.on('end', () => {
           const body = JSON.parse(data);
           resp = body;
           console.log(body)
        })
    })
    
    request.on('error', (error) => {
        console.log('An erorr', error);
    })
    request.end()
    return resp;
}

getResults(278);



