const GP = require('./Graph');
var async = require('async');


// function to print 
const funct0 = new Promise((resolve,reject) => {
  resolve("task zero !") 
})
const funct1 = new Promise((resolve,reject) => {
 resolve("task one !")
})
const funct2 = new Promise((resolve,reject) => {
  resolve("task two !")
})
const funct3 = new Promise((resolve,reject) => {
 resolve("task three !")
})
const funct4 = new Promise((resolve,reject) => {
 resolve("task four !")
}) 
const funct5 = new Promise((resolve,reject) => {
  resolve("task five !")
})
const funct6 = new Promise((resolve,reject) => {
 resolve("task six !")
})
const funct7 = new Promise((resolve,reject) => {
 resolve("task seven !")
})
const funct8 = new Promise((resolve,reject) => {
  resolve("task eight !")
})
const funct9 = new Promise((resolve,reject) => {
 resolve("task nine !")
})
const funct10 = new Promise((resolve,reject) => {
 resolve("task ten !")
})


//functions to execute-------
const func0 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task zero !") },1000)
})
const func1 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task one !")},2000)
})
const func2 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task two !")},2500)
})
const func3 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task three !")},3000)
})
const func4 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task four !")},3500)
})
const func5 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task five !")},4000)
})
const func6 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task six !")},500)
})
const func7 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task seven !")},1000)
})
const func8 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task eight !")},6000)
})
const func9 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task nine !")},100)
})
const func10 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task ten !")},10000)
})

// -------------------------------
// pushing to array (printable)
let stackers=[]
stackers.push(funct0);
stackers.push(funct1);
stackers.push(funct2);
stackers.push(funct3);
stackers.push(funct4);
stackers.push(funct5);
stackers.push(funct6);
stackers.push(funct7);
stackers.push(funct8);
stackers.push(funct9);
stackers.push(funct10);
// pushing to array (executable)
let stacker=[]
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
let Graph1 = new GP(10);

// add the vertecies
for (let i =0; i<stacker.length ; i++){
  Graph.AddVertex(stacker[i]);
  Graph1.AddVertex(stackers[i])
}

// add the edges (executable)
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

//add the edges (printable)
Graph1.AddEdge(funct0,funct1);
Graph1.AddEdge(funct0,funct2);
Graph1.AddEdge(funct1,funct3);
Graph1.AddEdge(funct1,funct4);
Graph1.AddEdge(funct2,funct5);
Graph1.AddEdge(funct2,funct6);
Graph1.AddEdge(funct3,funct7);
Graph1.AddEdge(funct3,funct8);
Graph1.AddEdge(funct4,funct9);
Graph1.AddEdge(funct4,funct10);

// print the Graph
console.log("graph print :");
Graph1.printGraph();



// find starting points 
console.log("startingpoints print :");
const arr =Graph.FindStart();
console.log("arr ="+arr);
// find all layers 
finalArray = Graph.Looper(arr);
console.log("finalArray =");
//console.log(finalArray);

console.log("---------------------------- sorting is done -----------------------------------------------------------------")


async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    array[index].then((value) => console.log("start executing :" + value))
    await callback(array[index], index, array);
    
  }
}

async function ExecuteNodes(stacker){
  var ind =0
  let nodesRes = new Array()
  let checker = stacker
  
  asyncForEach(stacker,(elm) => {
    
    elm.then((res) => {
      console.log(res)
      console.log("finished executing :" +res)
      ind++
      
    })
    nodesRes.concat(Graph.ShowSuccessors(elm))
  })
  
  if (nodesRes == []){
    console.log("Execution done")
    return null
  }
  else if (ind == checker.length ) {
    ExecuteNodes(nodesRes)
  }
  
}

ExecuteNodes(Array.from(finalArray[0]))

// simpler form of parallel 
// Promise.all(finalArray[1]).then(value => {
//   console.log(value)
// })