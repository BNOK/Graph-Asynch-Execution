const GP = require('./Graph1');
var async = require('async');
const { executionAsyncResource } = require('async_hooks');
const { promises } = require('fs');


// specify the number of vertecies 1
let Graph = new GP("./NewGraph.json");

let nodesArray = Graph.MakeFunctions("./NewGraph.json")

// find starting points 
console.log("startingpoints print :");
const arr =Graph.FindStart();

// find all layers 
//finalArray = Graph.Looper(arr);

console.log("--------------------- sorting is done ------------------------------------------");

//final executor ?

function Executor3(array){
  let subArray = new Array();
  
  //console.log("array input length : ",array.length)
  for(let i=0; i< array.length ;i++){
    //console.log("start !")
    let visit = Graph.graphList.get(array[i])[Graph.graphList.get(array[i]).length-1];
    //console.log("status",visit)
    
      array[i].then((value) =>{
        console.log("\x1b[31m%s\x1b[0m","executed : " + value);
        subArray = Graph.ShowSuccessors(array[i])
        //console.log("subarray", subArray);
        Graph.graphList.get(array[i]).splice(Graph.graphList.get(array[i]).length-1,1,true);
        //console.log("after changing",Graph.graphList.get(array[i]));
        
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
Executor3(Array.from(arr))
/////////////