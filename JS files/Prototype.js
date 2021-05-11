const fs = require('fs');

GraphContent = JSON.parse(fs.readFileSync("./httpdata.json",{encoding : 'utf8'}));
console.log(GraphContent);
console.log("------------");

const vals = Object.values(GraphContent);
const keys = Object.keys(GraphContent);

console.log(Object.values(vals[0]));

