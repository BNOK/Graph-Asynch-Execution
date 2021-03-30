var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// xhr.addEventListener('readystatechange',() => {
//     if (xhr.readyState === 4){
//         console.log(xhr.responseText);
//     }
    
// })

// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
// xhr.send();
let httpobject = 
{"req1":{"url":"https://jsonplaceholder.typicode.com/todos/1","eventname" : "1"},
"req2":{"url":"https://jsonplaceholder.typicode.com/todos/2","eventname" : "2"},
"req3":{"url":"https://jsonplaceholder.typicode.com/todos/3","eventname" : "3"}};

let values = Object.values(httpobject);
let keys = Object.keys(httpobject);

function httpGetter(req,url,eventName){

    req.addEventListener(eventName,() => {
        if (req.readyState === 4){
            console.log(req.responseText);
            console.log(id);
            
        }
    })
    
    req.open('GET',url);
    req.send();
}



for(let i=0;i<values.length;i++){
    var xhr = new XMLHttpRequest();
    httpGetter(i,values[i].url,values[i].eventname);
}

