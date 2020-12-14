const GP = require('./Graph');
var parallel = require('run-parallel');

//-functions to execute-------
function fun0 () {
  setTimeout(function () {
  return "this is function 0 !";  
  }, 200)
}
function fun1(callback) {
  setTimeout(function () {
  return "this is function 1 !";  
  }, 200)
}
function fun2(callback) {
  setTimeout(function () {
  return "this is function 2 !"; 
  }, 200)
}
function fun3(callback) {
  setTimeout(function () {
  return "this is function 3 !"; 
  }, 200)
}
function fun4(callback) {
  setTimeout(function () {
  return "this is function 4 !";  
  }, 200)
}

function fun5(callback) {
  setTimeout(function () {
  return "this is function 5 !"; 
  }, 200)
}
// -------------------------------
// pushing to array 
let stacker=[];
stacker.push(fun0);
stacker.push(fun1);
stacker.push(fun2);
stacker.push(fun3);
stacker.push(fun4);
stacker.push(fun5);

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
async function ExecuteNodes(nodesArray){
  const resultArray = [];
  for(let i=0; i<nodesArray.length ; i++){
    let nodeRes =await nodesArray[i];
    resultArray[i] = nodesRes;
  }
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







