
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
    Looper(temp){
        finalList = new Array();
        finalList.push(new Set(temp));
        index =0;
        FinalLayer(temp){
            index += 1;
            arr1 = temp.forEach(findnemo);
            temp = Array.from(finalList[index]);
            if (temp== [])
                    return ;
            else
                this.FinalLayer(temp);
        }

    }
    

    findnemo(element){
        
        arr = this.GraphList[element];
        S= new Set(arr);
        finalList[index].add(S);
    }


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