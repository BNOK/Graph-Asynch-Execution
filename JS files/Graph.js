
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.vertexList = new Array();
      this.edgesList = new Array();
    }
  
  
    AddVertex(vertex) {
      this.vertexList.push(vertex);
      
    }
  
    AddEdge(pair) {
      this.edgesList.push(pair);
    }
    // find starting points ---------
    FindStart(){
        const st = new Set(this.vertexList);
        // check all elements in the set
        this.edgesList.forEach(find)

        return new Array(st);
    }
    // function for the foreach loop 
    find(edge){
        if (st.has(edge[1])){
            st.delete(edge[1]);
        }
    }
    // find all layers ---------------------
    
 

    

    //----------------------------------------------------------------------------------
    printGraph()
    {
        // get all the vertices
        var get_keys = this.AdjList.keys();
 
        // iterate over the vertices
        for (var i of get_keys) 
        {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
 
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values)
                conc += j + " ";
 
            // print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}

module.exports = Graph;