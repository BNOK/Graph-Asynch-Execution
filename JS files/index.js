const GP = require('./Graph');

const g = new GP(5);

for (let i = 0; i < g.noOfVertices; i++) {
  // take input x 
  g.AddVertex(i);
  // console.log(g.vertexList[i]);
}

for (let i=0;i<g.vertexList.length ; i++){
  g.AddEdge([i,i+1]);
  console.log(g.edgesList[i]);
}



