const GP = require('./Graph');
var async = require('async');

//-functions to execute-------
let func0 =function(callback){
  //perform action
  callback(null,"task 0 is executed !")
}
let func1 =function(callback){
  //perform action
  callback(null,"task 1 is executed !")
}
let func2 =function(callback){
  // perform action
  callback(null,"task 2 is executed !")
}
let func3 =function(callback){
  // perform action 
  callback(null,"task 3 is executed !")
}
let func4 =function(callback){
  // perform action 
  callback(null,"task 4 is executed !")
}
let func5 =function(callback){
  // perform action 
  callback(null,"task 5 is executed !")
}
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


// recursive execution 

async.parallel(stacker,function(err,result){
  console.log(result);
})


function RecEx(func){
  let result = func ;
  sucor = Array.from(func.values());
  if (sucor ==[]){
    return result ;
  }
  
  sucor.foreach(element => {
    RecEx(element);
  })

  
}







