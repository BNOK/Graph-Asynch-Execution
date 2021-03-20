const { Console } = require('console');
const fs = require('fs')
const treeify = require('treeify');
var dislay = false;

class Graph 
{
    // defining vertex array and
    // adjacent list
    constructor(filePath) {
      
        this.graphList = new Map();
        this.graphObject = JSON.parse(fs.readFileSync(filePath,{encoding : 'utf8'}));
        this.visitedChecker = new Array();
        this.NodeList = new Map();
    }
    createNode(id, name, duration) {
        let node = {};
        node.parents = [];
        node.children = [];
        node.name = name;
        node.id = id;
        node.start = false;
        node.finish = false;
        node.duration = duration;
        node.task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(node.name)
            }, node.duration);
        });
        return node;
    }

    copyNode(node_) {
        let node = {};
        node.parents = [];
        node.name = node_.name;
        node.id = node_.id;
        node.start = node_.start;
        node.finish = node_.finish;
        node.duration = node_.duration;
        return node;
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
        let nodeIndex  = this.FindTaskId(node);
        if(dislay){
console.log('succ of ' + nodeIndex + '--->>> ' + Array.from(this.graphList.get(node)));
        }
        
        let succs = Array.from(this.graphList.get(node));
        succs.pop();
        let selectedSuccs = [];
        for (let i = 0; i < succs.length; i++) {
            let currentSuccIndex  = this.FindTaskId(succs[i]);
            let arr2 = this.NodeList.get(currentSuccIndex).parents;
            if (arr2.length === 0) { 
                if(dislay){
console.log("Array is empty!")
                }
                
                selectedSuccs.push(succs[i])
            }else{

            }
        }
        return selectedSuccs;
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
        if(dislay){
console.log(values[index].link);
        }
        
    }

    GenericFunction(taskName,duration){
        return new Promise((resolve,reject) =>{
            setTimeout(() => {resolve(taskName)},duration);
        });
    }

    FindTaskDuration(node){
        let index = Array.from(this.graphList.keys()).indexOf(node);
        let val = Object.values(this.graphObject);

        return val[index].duration;
    }

    FindTaskname(node){
        let index = Array.from(this.graphList.keys()).indexOf(node);
        let val = Object.values(this.graphObject);
        return val[index].name;
    }

    FindTaskId(node){
        let index = Array.from(this.graphList.keys()).indexOf(node);
        let val = Object.values(this.graphObject);
        return index;
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

    
    printList(){
        for (let [key, value] of this.NodeList) {
            if(dislay){
console.log(' ' + JSON.stringify(key)  + '  -->>>   ' +  JSON.stringify(value)  )
            }
            
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

    ReleaseParent(parent){
        
        if(dislay){
console.log('task finihsed  ... ' + parent)
        }
        for (let [key, value] of this.NodeList) {
            let arr2 = value.parents;
            if(arr2.includes(parent)){
                //console.log(' found  ... ' + current + ' is the parents of .. ' + value.id);
                const isLargeNumber = (element) => element == parent;
                arr2.splice(arr2.findIndex(isLargeNumber),1);
                if(dislay){
console.log('releasing ... ' + parent + ' as a parent of ... ' + key)
                }
                
                //arr2[arr2.findIndex(isLargeNumber)] = -100;
            }
        }
        this.printList();
    }

    // ------------------- JSON file operations ---------------
    MakeFunctions(){
        let finalResult = new Array();    
        let fileContent = Object.values(this.graphObject);
        
        for(let i=0;i<fileContent.length;i++){
            let temp = new Promise((resolve,reject) =>{
                // console.log("name : ",fileContent[i].name);
                setTimeout(() => {
                    this.ReleaseParent(i); resolve(fileContent[i].name)},fileContent[i].duration);
            }); 
            finalResult.push(temp);  
            this.AddVertex(temp);

            let temp_node = this.createNode(i, fileContent[i].name, fileContent[i].duration);
            //this.NodeList.add(temp_node);
            this.NodeList.set(i, temp_node);
        }
        
        //console.log("setting the edges :");
        //------------ setting the edges ------
        let n = Array.from(this.graphList.keys());
        
        for(let i=0;i<n.length;i++){
            let linkArray = fileContent[i].link;
            
            
            if (linkArray.length >0){
                
                for(let j=0;j<linkArray.length;j++){
                    
                    let o = linkArray[j];
                    // console.log("head",i)
                    this.graphList.get(n[i]).push(n[o]);
                    if(dislay){
console.log(' child  ' + linkArray[j]  + ' of node   ' +  i )
                    }
                    
                    let children_arr = this.NodeList.get(i).children;
                    children_arr.push(linkArray[j]);

                    let parents_arr = this.NodeList.get(linkArray[j]).parents;
                    parents_arr.push(i);
                }  
            }
            this.graphList.get(n[i]).push(false);
        }
        /* for (let [key, value] of this.NodeList) {
            console.log(' ' + JSON.stringify(key)  + '  -->>>   ' +  JSON.stringify(value)  )
        } */
        //-----------------
        

        return finalResult;
    }

    PrintTree(file){
    var ourtree = {};
    if(file == './10node_tree.json'){
        ourtree = {
            'task 0': {
                'task 1': {
                    'task 3': {
                        'task 7': {
                        },
                        'task 8': {
                       
                        }
                        
                    },
                    'task 4': {
                        'task 9': {
                        
                        },
                        'task 10': {
                            
                        }
                    }
                },
                'task 2': {
                    'task 5': {
                                        
                    },
                    'task 6': {
                        
                    }
                }
            }
        };
    }else{
        if(file == './sections.json' || file == './walid.json'){
            ourtree = {
                'Task_0': {
                    'Task_1': {
                        'Task_1.1': {
                            'Task_1.5': {
                                'Task_1.6': {
                                    'Task_1.8': {
                                    }
                                },
                                'Task_1.7': {
                                    'Task_1.9': {
                                        'Task_1.10': {
                                        }
                                    }
                                }
                            }                        
                        },
                        'Task_1.2': {
                                    },
                        'Task_1.3': {
                                    }
                    },
                    'Task_2': {
                        'Task_2.1': {
                            'Task_2.5': {
                                'Task_2.6': {
                                    'Task_2.7': {
                                        'Task_2.8': {
                                        }
                                    }
                                }
                            }                        
                        },
                        'Task_2.2': {                        
                        },
                        'Task_2.3': {                        
                        },
                        'Task_2.4': {                        
                        }
                    },
                    'Task_3': {
                        'Task_3.1': {                        
                        },
                        'Task_3.2': {
                            'Task_3.3': {
                                'Task_3.4': {
                                },
                                'Task_3.5': {
                                }
                            }                        
                        }
                    }
                }
            };
        }else{
            if(file == './dataSample.json')
            {
            ourtree = {
                'task_0': {
                    'task_1': {
                        'task_4': {
                        },
                        'task_5': {
                        }
                    },
                    'task 2': {
                        'task_6': {
                        }
                    },
                    'task 3': {
                        'task 6': {
                       }
                    }
                }
            };
        }
        }
    }
    
    console.log(
        treeify.asTree(ourtree, true)
     );

}

};




module.exports = Graph;




///////////
// const func0 = new Promise((resolve,reject) => {
//     setTimeout(() => {resolve("task zero !")},1000);
//   });
//Graph.AddEdge(nodesArray[0],nodesArray[1]);
///////////
