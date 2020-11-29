
class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.GraphList = new Map();

      
    }
  
  
    AddVertex(vertex) {
        this.GraphList.set(v, []);
      
    }
  
    AddEdge(v,w) {
        this.GaphList.get(v).push(w);
    }
    // find starting points ---------
    FindStart(){
        temp = Array.from(this.GraphList.keys());
        this.GraphList.forEach(finding(element));
        return temp;
    }
    finding(element){
        arr1 =Array.from(element.values());
        for(let i=0 ; i<arr1;i++){
            if (temp.includes(arr1[i])){
                temp.splice(i,1);
            }
        }
    }
    // find all layers ---------------------
    FinalLayering(tempo){
        tempo.forEach(findnemo(element))
    }
    findnemo(element){
        for (var m in this.GraphList){
            for (var i=0;i<this.GraphList[m].length;i++){
            // ... do something with myMap[m][i] ...
            
            }
        } 
    }
   
//-----------------------------
    // if (index < x.length){
    //     x[index].add(starter);
    // }
    // else{
    //     x.push(new Set(starter));
    // }
    // index++;
    // starter = E[1];

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