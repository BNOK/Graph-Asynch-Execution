const fs = require('fs');

GraphContent = JSON.parse(fs.readFileSync("./httpdata.json",{encoding : 'utf8'}));
console.log(GraphContent);
console.log("------------");
let object = new Array();

for(let val in GraphContent){
    console.log("val:",val);
    console.log("graph content",GraphContent[val]);
}


//---- recursive function ---- 
// function props(obj){
//     for(let val in obj){
//         if (obj[val] === null){
//             break;
//         }
//         else if(typeof(obj[val])==='object'){
//             console.log(`key : ${val}, value : ==>`);
//             props(obj[val]);
//         }
//         else{
//             console.log(`key : ${val}, value : ${obj[val]}`);
//         }
//     }
// }

// props(GraphContent)
