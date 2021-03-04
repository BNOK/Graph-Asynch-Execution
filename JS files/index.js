const GP = require('./Graph');
var async = require('async');
const { executionAsyncResource } = require('async_hooks');
const { promises } = require('fs');
const fs = require('fs')



// function to print 
const funct0 = new Promise((resolve,reject) => {
  resolve("task zero !") ;
});
const funct1 = new Promise((resolve,reject) => {
 resolve("task one !");
});
const funct2 = new Promise((resolve,reject) => {
  resolve("task two !");
});
const funct3 = new Promise((resolve,reject) => {
 resolve("task three !");
});
const funct4 = new Promise((resolve,reject) => {
 resolve("task four !");
}) ;
const funct5 = new Promise((resolve,reject) => {
  resolve("task five !");
});
const funct6 = new Promise((resolve,reject) => {
 resolve("task six !");
});
const funct7 = new Promise((resolve,reject) => {
 resolve("task seven !");
});
const funct8 = new Promise((resolve,reject) => {
  resolve("task eight !");
});
const funct9 = new Promise((resolve,reject) => {
 resolve("task nine !");
});
const funct10 = new Promise((resolve,reject) => {
 resolve("task ten !");
});


//functions to execute-------
const func0 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task zero !")},1000);
});
const func1 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task one !")},10000);
});
const func2 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task two !")},3500);
});
const func3 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task three !")},3000);
});
const func4 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task four !")},4000);
});
const func5 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task five !")},1000);
});
const func6 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task six !")},1000);
});
const func7 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task seven !")},10000);
});
const func8 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task eight !")},6000);
});
const func9 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task nine !")},1000);
});
const func10 = new Promise((resolve,reject) => {
  setTimeout(() => {resolve("task ten !")},1000);
});

// -------------------------------
// pushing to array (printable)
let stackers=[];
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
let Graph = new GP(10);
let Graph1 = new GP(10);

// add the vertecies
for (let i =0; i<stacker.length ; i++){
  Graph.AddVertex(stacker[i]);
  Graph1.AddVertex(stackers[i]);
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
//Graph1.printGraph();



// find starting points 
console.log("startingpoints print :");
const arr =Graph.FindStart();

// find all layers 
finalArray = Graph.Looper(arr);
console.log(finalArray);


console.log("---------------------------- sorting is done -----------------------------------------------------------------");


// async function asyncForEach(array) {
//   let nodies = new Array()
//   console.log(nodies.length)
//   for (let index of array) {
    
//     await index;
//     nodies = nodies.concat(Graph.ShowSuccessors(index));
    
//   }
  
//   return nodies
// }

// async function ExecuteNodes(stacker){
  
//   let nodesRes = asyncForEach(stacker);
  
//   if (nodesRes != []){
    
//     ExecuteNodes(nodesRes);
//   }
//   else {
//     return null;
//   }
// }

// ExecuteNodes(Array.from(finalArray[0]));


// simpler form of parallel 
// Promise.all(finalArray[1]).then(value => {
//   console.log(value)
// })

//await 

async function Executer(array){
  let M = new Array();

  console.log("starting execution :");
  for (i=0;i<array.length;i++){
    //execution

    
    //some condition that wont let us recursive this function until we have a met condition
    
    M = M.concat(Graph.ShowSuccessors(array[i]));
    console.log(checker)
  }
  console.log("finished executing")
  
  if (M.length != 0 & checker){
    checker =false;
    Executer(M);
  }
  else {
    console.log("DONE")
    return null
  } 
}
//////////////
//Executer(Array.from(finalArray[0]))
/////////////// 

// another executer
async function Executer2(graphArray){
  let arriRes = new Array();
  console.log("second executer");
  for(let i=0; i< graphArray.length ;i++){
    console.log("start")
    let  x = await Promise.all(graphArray[i])
    arriRes.push(x);
    console.log(x);
    console.log("finish")
  }

  // for(let i=0; i< arriRes.length ;i++){
    
  //   console.log(arriRes[i]);
  //   console.log("second");
  // }
}
/////////////////
//Executer2(finalArray)
////////////////
//-----------
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index]);
  }
}
//----------

//final executor ?

function Executor3(array){
  
  let subArray = new Array();
  

  for(let i=0; i< array.length ;i++){
    console.log("start !")
    
    array[i].then((value) =>{
      console.log("executed : " + value);
      subArray = Graph.ShowSuccessors(array[i])
      
      if(subArray.length !=0){
        console.log("finished !");
        Executor3(subArray);
      }
      else{
        console.log("no more successors !!");
        return null;
      }
    })

  }
 
}
/////////////
Executor3(Array.from(finalArray[0]))
/////////////