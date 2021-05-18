const fs = require('fs');

GraphContent = JSON.parse(fs.readFileSync("./httpdata.json",{encoding : 'utf8'}));
console.log(GraphContent);
console.log("------------");
let object = new Array();

//-------------
// let newobj ={}
// for(let i=0;i<Object.values(GraphContent).length;i++){ 
//     newobj[i] ={
//         "key":Object.keys(GraphContent)[i],
//         "value": Object.values(GraphContent)[i]
//     };

//     if (typeof(newobj[i])==='object'){
//         console.log("this is an object",newobj[i]);
//     }
//     else{
//         console.log("this is a prop",newobj[i])
//     }

// }

// console.log("newobj:",Object.values(newobj)[1].value);

// console.log("new obj:", newobj)


//---- recursive function ---- 
function props(obj,index){
    console.log("index :",index);
    for(let val in obj){
        if (obj[val] === null){
            break;
        }
        else if(typeof(obj[val])==='object'){
            console.log(`key : ${val}, value : ==>`);
            index++;
            props(obj[val],index);
        }
        else{
            console.log(`key : ${val}, value : ${obj[val]}`);
        }
    }
}

props(GraphContent,0)
