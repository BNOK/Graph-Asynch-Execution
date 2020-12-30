const GP = require('./Graph');
var async = require('async');


//-functions to execute-------
const func0 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task zero !"),1000)
})
const func1 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task one !"),2000)
})
const func2 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task two !"),2500)
})
const func3 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task three !"),3000)
})
const func4 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task four !"),3500)
})
const func5 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task five !"),4000)
})
const func6 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task six !"),500)
})
const func7 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task seven !"),1000)
})
const func8 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task eight !"),6000)
})
const func9 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task nine !"),100)
})
const func10 = new Promise((resolve,reject) => {
  let wait = setTimeout(resolve("task ten !"),10000)
})

// -------------------------------
// pushing to array 
let stacker=[];
stacker.push(func0);
stacker.push(func1);
stacker.push(func2);
stacker.push(func3);
stacker.push(func4);
stacker.push(func5);
stacker.push(func6);
stacker.push(func7);
stacker.push(func8);
stacker.push(func9);
stacker.push(func10);


// --------------------------------------

// specify the number of vertecies 1
let Graph = new GP(5);

// add the vertecies
for (let i =0; i<stacker.length ; i++){
  Graph.AddVertex(stacker[i]);
}

// add the edges 
Graph.AddEdge(func0,func1);
Graph.AddEdge(func0,func2);
Graph.AddEdge(func1,func3);
Graph.AddEdge(func1,func4);
Graph.AddEdge(func2,func5);
Graph.AddEdge(func2,func6);
Graph.AddEdge(func3,func7);
Graph.AddEdge(func3,func8);
Graph.AddEdge(func4,func9);
Graph.AddEdge(func4,func10);

// print the Graph
console.log("graph print :");
//Graph.printGraph();



// find starting points 
console.log("startingpoints print :");
const arr =Graph.FindStart();
console.log("arr ="+arr);
// find all layers 
finalArray = Graph.Looper(arr);
console.log("finalArray =");
console.log(finalArray);

console.log("---------------------------- sorting is done -----------------------------------------------------------------")


async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    array[index].then((value) => console.log("start executing :" + value))
    await callback(array[index], index, array);
    array[index].then((value) => console.log("finished executing :" + value))
  }
}

async function ExecuteNodes(stacker){
  let nodesRes = new Array()
  asyncForEach(stacker,(elm) => {
    nodesRes = Graph.ShowSuccessors(elm)
    if (nodesRes == []){
      console.log("Execution done")
      return null
    }
    else {
      ExecuteNodes(nodesRes)
    }
  })
}

ExecuteNodes(Array.from(finalArray[0]))

// simpler form of parallel 
// Promise.all(finalArray[1]).then(value => {
//   console.log(value)
// })