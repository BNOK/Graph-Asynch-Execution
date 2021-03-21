const fs = require('fs');
const node = require("./NodeClass.js");


class GraphClean{
    constructor(filePath) {
        this.GraphContent = JSON.parse(fs.readFileSync(filePath,{encoding : 'utf8'}));
        this.NodeList = new Array();    
    }

    createNodes() {
        let values = Object.values(this.GraphContent);
        for(let i=0;i<values.length;i++){

            let ident = i;
            let name = values[i].name;
            let dur = values[i].duration;
            //creation of an instance
            let nodeInstance = new node(ident,name,dur);
            nodeInstance.setChildren(values[i].link);
           
            //adding to the Node List
            this.NodeList.push(nodeInstance);
        }

        //console.log("NodeList : ",this.NodeList);
    }

    FindTaskDuration(node){
        let index = this.NodeList.indexOf(node);
        let val = Object.values(this.GraphContent);

        return val[index].duration;
    }

    FindTaskname(node){
        let index = this.NodeList.indexOf(node);
        let val = Object.values(this.GraphContent);

        return val[index].name;
    }

    FindTaskId(node){
        let index = this.NodeList.indexOf(node);
        return index;
    }

    // i think this is a pretty good code ..
    SetNodeParents(){
        let values = Array.from(Object.values(this.GraphContent));

        for(let i=0;i<values.length;i++){
            
           let links = values[i].link;
           if (links.length !=0){
                for(let j=0;j<links.length;j++){
                    let childNode = this.NodeList[links[j]];
                    childNode.setParents(i);
                    //console.log(`parents for ${childNode.name} are :`,childNode.parents);
                }
           }
        }  
    }

    //finding roots of the graph
    FindRoots(){
        let roots = new Array();

        for(let i=0;i<this.NodeList.length;i++){
            if(this.NodeList[i].parents.length ==[]){
                roots.push(this.NodeList[i]);
            }
        }

        return roots;
    }

    ReleaseParent(parent){
        
        let childnodes = parent.getChildren();
        
        for(let i=0;i<childnodes.length;i++){
            let nodeParents = this.NodeList[childnodes[i]].parents;
            
            if(nodeParents.includes(parent.id)){
                let parentIndex = (element) => element == parent;
                nodeParents.splice(parentIndex,1);
            }
        }
    }

    ShowSuccessors(node){
        let succs = node.getChildren();
        let selectedSuccs = [];

        for (let i = 0; i < succs.length; i++) {
            let parentsArray = this.NodeList[succs[i]].parents;

            if (parentsArray.length === 0) { 
                selectedSuccs.push(this.NodeList[succs[i]]);
            }
        }
        return selectedSuccs;
    }

    ExecuteNode(node,funct){
        node.task.then(funct);
    }
}

module.exports = GraphClean;