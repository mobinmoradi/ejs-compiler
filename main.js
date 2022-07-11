const path = require('path');
const fs = require('fs');

const ejs = require("ejs");


let filename = 'temp2';

let source = fs.readFileSync(path.join(__dirname,'templates', `${filename}.ejs`))
let template = ejs.compile(source.toString('utf8'));

let data ={
    'url':'https://www.google.com',
    'past':{
      'status':'200',
      'date':'1401/4/14 8:00:00'
    },
    'now':{
      'status':'504',
      'date':'1401/4/14 9:00:00'
    }
}


var result = template(data);

fs.writeFile(`${filename}.html`, result, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`${filename} is ready!`);
    }
});


