const fs = require('fs')
class Graph 
{
    // defining vertex array and
    // adjacent list
    constructor(filePath) {
      
        this.graphList = new Map();
        this.graphObject = JSON.parse(fs.readFileSync(filePath,{encoding : 'utf8'}));
        this.visitedChecker = new Array();
    }
  
    // adding vertex as key to a Map 
    AddVertex(vertex){
        this.graphList.set(vertex, []);
    }  
      
    // adding edges w as the value of the key v 
    AddEdge(v,w) {
        this.graphList.get(v).push(w);
    }

   
    //show successors using code 
    ShowSuccessors(node){
        // console.log(Array.from(this.graphList.get(node)));
        let succs = Array.from(this.graphList.get(node));
        succs.pop();
        return succs
    }

    CheckVisit(node_id){
        return this.graphList.get(node_id).pop()
    }

    SetVisit(node_id,status){
        this.graphList.get(node_id).push(status)
    }
    //show successors using JSON
    ShowSuccessorsJSON(node_id){        
       

        let keys = Object.keys(this.graphObject);
        let values = Object.values(this.graphObject);
        
        let index = keys.find(element => element ==node_id);
        console.log(values[index].link);
    }

    GenericFunction(taskName,duration){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {resolve(taskName)},duration);
        });
    }

    // find starting points ---------
    X= new Array();
    FindStart(){
        let temp = Array.from(this.graphList.keys()); // get the keys(vertecies) in the form of array
        // console.log("origin =" +temp);
        this.graphList.forEach(values => {
            const arr1 =values;
           
            if (arr1 !=[]){
               
                for(let i=0 ; i<arr1.length;i++){
                    
                    if (temp.includes(arr1[i])){
                        let pos = temp.indexOf(arr1[i]);        
                        temp.splice(pos,1);
                        // console.log("temp splice = "+temp);
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

    // ------------------- JSON file operations ---------------
    MakeFunctions(){
        let finalResult = new Array();    
        let fileContent = Object.values(this.graphObject);
        
        
        for(let i=0;i<fileContent.length;i++){
            let temp = new Promise((resolve,reject) =>{
                // console.log("name : ",fileContent[i].name);
                setTimeout(() => {resolve(fileContent[i].name)},fileContent[i].duration);
            }); 
            finalResult.push(temp);  
            this.AddVertex(temp);
        }
        
        
        console.log("setting the edges :");
        //------------ setting the edges ------
        let n = Array.from(this.graphList.keys());
        
        for(let i=0;i<n.length;i++){
            let linkArray = fileContent[i].link;
            
            
            if (linkArray.length >0){
                
                for(let j=0;j<linkArray.length;j++){
                    
                    let o = linkArray[j];
                    // console.log("head",i)
                    this.graphList.get(n[i]).push(n[o]);
                    
                }  
            }
            this.graphList.get(n[i]).push(false);
        }
        //-----------------
        

        return finalResult;
    }
}

module.exports = Graph;




///////////
// const func0 = new Promise((resolve,reject) => {
//     setTimeout(() => {resolve("task zero !")},1000);
//   });
//Graph.AddEdge(nodesArray[0],nodesArray[1]);
///////////