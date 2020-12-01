const GP = require('./Graph');

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
Graph.Looper(arr);








