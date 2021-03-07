const fs = require('fs');
const Gp= require('./Graph');

// fs.readFile('./parametres.json', 'utf8', (err, data) => {
//     if (err) {
//         console.log("Error reading file from disk:", err)
//         return
//     }
//     try {
//         const testing = JSON.parse(data)
//         console.log("index:", testing.length) // => "Customer address is: Infinity Loop Drive"
//     } catch(err) {
//         console.log('Error parsing JSON string:', err)
//     }
// })

//-----------------------------------------
// function GenericFunction(funcName,taskName,duration){
//     let nodd = new Promise((resolve,reject) =>{
//         setTimeout(() => {resolve(taskName)},duration);
//     });
//     Object.defineProperty(nodd, "name", {
//         value: funcName
//       });
//     return nodd
// }

// function MakeFunctions(filePath,result){
//     let functionArray = new Array();
//     let checker = false;

//     fs.readFile(filePath, 'utf8', (err, data) => {
//         if (err) {
//             console.log("Error reading file from disk:", err)
//             return
//         }
//         try {
//             const testing = JSON.parse(data)
//             for(let i=0;i<testing.length;i++){
//                 let pro = GenericFunction(data[i].name,data[i].duration);
//                 //console.log(pro)
//                 result.push(pro); 
//             }
//             console.log(" results" ,result);
//             return result;
//         } catch(err) {
//             console.log('Error parsing JSON string:', err)
//         }
//     })  
// }
// /////////
// let x = [];
// x= MakeFunctions('./parametres.json',x);
// console.log(x);

//////////


//-------- read file sync ----------------
// function MakeFunctions(filePath){
//     let finalResult = new Array();

//     const data = fs.readFileSync(filePath, {encoding : 'utf8'});
    
//     let result = JSON.parse(data);
    
//     for(let i=0;i<result.length;i++){
//         let pro = GenericFunction(data[i].name,data[i].duration);
//         finalResult.push(pro);    
//     }
//     //console.log(finalResult);
//     return finalResult;
// }
// /////////
// let x =MakeFunctions("./parametres.json");
// console.log(x)
// let graph = new Map();


// graph.set(x[0],[1]);
// graph.set(x[1],[2]);
// graph.set(x[2],[3]);
// graph.set(x[3],[4]);
// console.log(graph.get(x[2]))
// graph.get(x[2]).push([1,2,3]);
// console.log(graph.get(x[2]))
/////////

//------ testing --------
// let Graph = new Gp(10);

// let nodesArray = Graph.MakeFunctions("./parametres.json")
// nodesArray[0].then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log("error :",err);
// });
// //console.log(nodesArray);

// Graph.AddEdge(nodesArray[0],nodesArray[1]);
//console.log(Graph.graphList);


//--------- beauty ---------
let finalResult = new Array();
    
const data = fs.readFileSync("./parametres.json", {encoding : 'utf8'});

let fileContent = Object.values(JSON.parse(data));

for(let i=0;i<fileContent.length;i++){
    let temp = new Promise((resolve,reject) =>{
        //console.log("name : ",fileContent[i].name);
        setTimeout(() => {resolve(fileContent[i].name)},fileContent[i].duration);
    }); 
    finalResult.push(temp);  
} 
    
console.log("finalresult:",finalResult);