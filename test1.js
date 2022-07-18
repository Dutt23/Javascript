async function queuePromises(){
  console.log("In side");
  console.log(await Promise.resolve(1));
  console.log(await Promise.resolve(2));
  console.log(await longFunc())
  console.log(await Promise.resolve(3));
  console.log(await Promise.resolve(4));
  console.log(await Promise.resolve(5));
  Promise.resolve(4).then((res) => console.log("On then block"))
  console.log("AFFTER THIS")

}

async function longFunc(){
for(let i = 0; i < 1000000000000; i++){
}
return "Long one over";
}

console.log("EHEH");
setTimeout(() => console.log("TIME OUT"), 0)
setTimeout(() => console.log("Part two"), 0)
queuePromises();
