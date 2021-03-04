const fs = require('fs')

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


function GenericFunction(taskname,duration){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {resolve(taskname)},duration);
    });
}

function MakeFunctions(filePath,result){
    let functionArray = new Array();
    let checker = false;

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log("Error reading file from disk:", err)
            return
        }
        try {
            const testing = JSON.parse(data)
            for(let i=0;i<testing.length;i++){
                let pro = GenericFunction(data[i].name,data[i].duration);
                //console.log(pro)
                result.push(pro);
                
            }
            console.log(result)
           
        } catch(err) {
            console.log('Error parsing JSON string:', err)
        }
    })  
}
/////////
let x = [];
MakeFunctions('./parametres.json',x);
console.log(x.length);

//////////
