const GP = require('./Graph');
var parallel = require('run-parallel')

// specify the number of vertecies 
let Graph = new GP(5);

// add the vertecies
for (let i =0; i<=10 ; i++){
  Graph.AddVertex(i);
}

// add the edges 
Graph.AddEdge(0,1);
Graph.AddEdge(0,2);
Graph.AddEdge(1,3);
Graph.AddEdge(1,4);
Graph.AddEdge(2,5);
Graph.AddEdge(2,6);
Graph.AddEdge(3,7);
Graph.AddEdge(3,8);
Graph.AddEdge(4,9);
Graph.AddEdge(4,10);

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


// execute in parallel  
finalArray.foreach(element => parallel(element ,function ))

// this is the function => give it an array or object of the functions to run 
// and give it a callback function to run one all the functione are complete 
// we can use the callback function to pass results from one layer to another layer

parallel([
  function (callback) {
    setTimeout(function () {
      callback(null, 'execute one')
    }, 200)
  },
  function (callback) {
    setTimeout(function () {
      callback(null, 'execute two')
    }, 100)
  }
],
// optional callback
function (err, results) {
 
})






