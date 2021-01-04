class Graph {
    // defining vertex array and
    // adjacent list
    constructor(noOfVertices) {
      this.noOfVertices = noOfVertices;
      this.graphList = new Map();

      
    }
  
    // adding vertex as key to a Map 
    AddVertex(vertex){
        this.graphList.set(vertex, []);
    }  
      
    // adding edges w as the value of the key v 
    AddEdge(v,w) {
        this.graphList.get(v).push(w);
    }

    ShowSuccessors(node){
        //console.log(Array.from(this.graphList.get(node)));
        return Array.from(this.graphList.get(node));
    }

    // find starting points ---------
    X= new Array();
    FindStart(){
        let temp = Array.from(this.graphList.keys()); // get the keys(vertecies) in the form of array
        //console.log("origin =" +temp);
        this.graphList.forEach(values => {
            const arr1 =values;
           
            if (arr1 !=[]){
               
                for(let i=0 ; i<arr1.length;i++){
                    
                    if (temp.includes(arr1[i])){
                        let pos = temp.indexOf(arr1[i]);        
                        temp.splice(pos,1);
                        //console.log("temp splice = "+temp);
                    }
                }
                
            }
            
        }); // loop through it 
       
        
        return temp;                               // return last version of the list temp 
    }

    

    // find all layers ---------------------
    
    Looper(stArray){                               // wrapper function 
        let layersList = new Array();
        let index =0;
        
        layersList.push(new Set(stArray));
        this.FinalLayer(stArray,index,layersList);
        // console.log("arr3 =");
        // console.log(layersList);
        
        return  layersList;
    }

    FinalLayer(sta,index,fl){                           // recursive function (custom bfs)
        index += 1;
        
        fl.push(new Set());
           
        sta.forEach(element => {
        let arr2 = new Array();
        arr2= this.graphList.get(element);
       
        arr2.forEach(item => fl[index].add(item));
        });

        sta = Array.from(fl[index]);
    
        if (sta.length == 0 ){
            console.log("done");
            
            return fl;
        }
        else{    
            this.FinalLayer(sta,index,fl);
        } 
    }

    
    
    //--------------------print the Graph----------------------------------------
    printGraph()
    {
        // get all the vertices
        var get_keys = this.graphList.keys();
 
        // iterate over the vertices
        for (var i of get_keys) 
        {
            var get_values = this.graphList.get(i);
            var conc = ""

            i.then((val) => {
                conc = val
            })
            
            // iterate over the adjacency list
            // concatenate the values into a string
            for (var j of get_values){
                j.then((val1) => {
                    console.log( conc + " -> " + val1 + "\n") 
                })
            }   
            
        }
    }

    //-----------------print starting points-----------
    PrintStarters(x){
        for(let i=0;i<x.length;i++){
            console.log(`temp[${i}] = ${x[i]}`);
        }
    }

    // ------------------- execute node recursively ---------------
    RecExe(value,key,mp){
        let node = key
    }
}




module.exports = Graph;