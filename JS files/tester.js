const gp = require('./GraphClean.js');


let Graph = new gp('./dataSample.json');

//creates instances of node class with all properties except for the parents
Graph.createNodes();

//sets the parents for each node
Graph.SetNodeParents();
//console.log("nodelist :",Graph.NodeList);

//gets the roots index
let root = Graph.FindRoots();



// ------------ Execution ----------------
function Executor(array) {

    let subArray = new Array();
    for (let i = 0; i < array.length; i++){
        console.log(`${Graph.FindTaskname(array[i])} is now executing for ${Graph.FindTaskDuration(array[i])} ms` );
        Graph.ExecuteNode(array[i],(value) =>{
            console.log(`${value} is now finished for ${Graph.FindTaskDuration(array[i])} ms` );//+ JSON.stringify(array[i])
            
            subArray = Graph.ShowSuccessors(array[i]);
            console.log("subArray :",subArray);
            if (subArray.length != 0) {
                console.log('Dependants tasks of ' + "\x1b[34m%s\x1b[0m",`${value} are now being launched in parallel.` )
                Executor(subArray);
            } else {
                return;
            }
        })
    }
}
///////////////
Executor(root);
///////////////