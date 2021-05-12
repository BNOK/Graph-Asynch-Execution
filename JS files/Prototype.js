const fs = require('fs');

GraphContent = JSON.parse(fs.readFileSync("./httpdata.json",{encoding : 'utf8'}));
console.log(GraphContent);
console.log("------------");
let object = new Array();

// for(let i=0;i<vals.length;i++){
//     console.log("keys :",i);
//     console.log(Object.keys(vals[i]));
//     console.log("vals :",i);
//     console.log(Object.values(vals[i]));
// }

//---- recursive function ---- 

function props(obj){
    for(let val in obj){
        if (obj[val] === null){
            
            break;
        }
        else if(typeof(obj[val])==='object'){
            
            props(obj[val]);
        }
        else{
            
            console.log(`key : ${val}, value : ${obj[val]}`);
        }
    }
}

props(GraphContent)
