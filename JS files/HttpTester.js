

// xhr  = new XMLHttpRequest();
// xhr.addEventListener('readystatechange',() => {
//     if (xhr.readyState === 4){
//         console.log(xhr,xhr.readyState);
//     }
    
// })

// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
// xhr.send();

//------------------------------

// let httpobject = 
// {   
//     "req1":{"url":"https://jsonplaceholder.typicode.com/todos/1","eventname" : "event1"},
//     "req2":{"url":"https://jsonplaceholder.typicode.com/todos/2","eventname" : "event2"},
//     "req3":{"url":"https://jsonplaceholder.typicode.com/todos/3","eventname" : "event3"}
// };

// let values = Object.values(httpobject);
// let keys = Object.keys(httpobject);

// function httpGetter(url){
//     let xhr = new XMLHttpRequest();
    
//     xhr.open('GET',url);
//     xhr.onload = function(){
//         let data = xhr.responseText;
//         let obj = JSON.parse(data);
//         console.log(obj.id);
//         console.log("----");
//     }
//     xhr.send();
// }

// for(let i=0;i<values.length;i++){
//     httpGetter(values[i].url);
// }

// ---------------- the actual thing ---------
const gp = require('./GraphClean.js');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let Graph = new gp('./httpdata.json');