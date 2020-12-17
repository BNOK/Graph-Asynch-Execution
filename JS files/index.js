const GP = require('./Graph');
var async = require('async');

//-functions to execute-------
const func0 = Promise.resolve("task one !")
const func1 = Promise.resolve("task two !")
const func2 = Promise.resolve("task three !")
const func3 = Promise.resolve("task four !")
const func4 = Promise.resolve("task five !")
const func5 = Promise.resolve("task six !")
// -------------------------------
// pushing to array 
let stacker=[];
stacker.push(func0);
stacker.push(func1);
stacker.push(func2);
stacker.push(func3);
stacker.push(func4);
stacker.push(func5);

// --------------------------------------



// // specify the number of vertecies 1
// let Graph = new GP(5);

// // add the vertecies
// for (let i =0; i<=10 ; i++){
//   Graph.AddVertex(i);
// }

// // add the edges 
// Graph.AddEdge(0,1);
// Graph.AddEdge(0,2);
// Graph.AddEdge(1,3);
// Graph.AddEdge(1,4);
// Graph.AddEdge(2,5);
// Graph.AddEdge(2,6);
// Graph.AddEdge(3,7);
// Graph.AddEdge(3,8);
// Graph.AddEdge(4,9);
// Graph.AddEdge(4,10);

// // print the Graph
// console.log("graph print :");
// Graph.printGraph();



// // find starting points 
// console.log("startingpoints print :");
// const arr =Graph.FindStart();
// console.log("arr ="+arr);
// // find all layers 
// finalArray = Graph.Looper(arr);
// console.log("finalArray =");
// console.log(finalArray);


// execute in parallel 
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function ExecuteNodes(stacker){
  const nodesRes = new Array(stacker.length)
  asyncForEach(stacker,(elm) => {
    console.log("resolved");
    console.log(elm);
  })
}

ExecuteNodes(stacker)

// recursive execution 

// async function RecEx(node){
//   let succ = node.values();
  
  
//   if(succ=== [] ){
//       return funresult;
//   }  
//   else{
//       succ.foreach(element =>{
//       RecEx(element);
//     })
//   }
// }







