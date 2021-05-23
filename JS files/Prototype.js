const gp = require('./GraphClean.js');
const fs = require('fs');


GraphContent = JSON.parse(fs.readFileSync("./httpdata.json", { encoding: 'utf8' }));
console.log(GraphContent);
console.log("------------");


//---- recursive function ---- 
let newobj = {}

let index = 0
function props(obj) {

    for(let val in obj){
        index++;
        if(obj[val]===null){
            break;
        }
        else if (typeof(obj[val])==="object"){
            newobj[index] = {val,"isobject":true}
            console.log("object");
            props(obj[val])
        }
        else{
            newobj[index] = {val,"isobject":false}
            console.log("prop")
        }
    }
}

props(GraphContent, index)
console.log(newobj);

//-----------
// let index=0
// function prop2(obj){
//     let objs = new Array();
//     let vals = Object.values(obj)
//     for (let i=0;i<vals.length;i++){
//         if(typeof(vals[i])==="object"){
//             prop2()
//         }
//     }

//     console.log(objs)
// }

// prop2(GraphContent)

