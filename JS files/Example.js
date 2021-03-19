const GP = require('./Graph');
var async = require('async');
const { executionAsyncResource } = require('async_hooks');
const { promises } = require('fs');



let Graph = new GP("./walid.json");
let Graph1 = new GP("./walid.json");


let nodesArray = Graph.MakeFunctions("./walid.json")

// add the vertecies

console.log("finding starting nodes");
const arr =Graph.FindStart();

function Executor(array) {
  
  let subArray = new Array();
  for (let i = 0; i < array.length; i++) {
    console.log(`${Graph.FindTaskname(array[i])} is now executing for ${Graph.FindTaskDuration(array[i])}` );//+ JSON.stringify(array[i])
    let indexer = Array.from(Graph.graphList.keys()).indexOf(array[i]);
    if (!Graph.CheckVisit(indexer)){
      array[i].then((value) => {
        console.log("\x1b[32m%s\x1b[0m",'Task ' +  value +    ' is executing ');

        subArray = Graph.ShowSuccessors(array[i]);
        Graph.SetVisit(indexer,true);
          
        if (subArray.length != 0) {
          console.log("\x1b[34m%s\x1b[0m",`${Graph.FindTaskname(array[i])} finished executing` )
          Executor(subArray);
        } 
        else { 
          return null;
        }
      })  
    }
        
  }
}
/////////////
//console.log(nodesArray);
Executor(arr)
/////////////