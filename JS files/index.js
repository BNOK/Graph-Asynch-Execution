const GP = require('./Graph');
var async = require('async');


//-functions to execute-------
const func0 = Promise.resolve("task zero !")
const func1 = Promise.resolve("task one !")
const func2 = Promise.resolve("task two !")
const func3 = Promise.resolve("task three !")
const func4 = Promise.resolve("task four !")
const func5 = Promise.resolve("task five !")
const func6 = Promise.resolve("task six !")
const func7 = Promise.resolve("task seven !")
const func8 = Promise.resolve("task eight !")
const func9 = Promise.resolve("task nine !")
const func10 = Promise.resolve("task ten !")

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
Graph.printGraph();



// find starting points 
console.log("startingpoints print :");
const arr =Graph.FindStart();
console.log("arr ="+arr);
// find all layers 
finalArray = Graph.Looper(arr);
console.log("finalArray =");
console.log(finalArray);

console.log("---------------------------------------------------------------------------------------------")


// execute in parallel 
async function asyncForEach(array, callback,callback1) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
  const newArr = []
  for (let index = 0; index < array.length; index++){
    await callback1(newArr.concat(Graph.ShowSuccessors(array))) 
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







