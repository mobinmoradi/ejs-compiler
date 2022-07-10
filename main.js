const path = require('path');
const fs = require('fs');

const Handlebars = require("handlebars");


let filename = 'temp1';

let source = fs.readFileSync(path.join(__dirname,'templates', `${filename}.handlebars`))
let template = Handlebars.compile(source.toString('utf8'));

let data ={
    'name':'test',
    'link':'google.com'
}


var result = template(data);

fs.writeFile(`${filename}.html`, result, (err) => {
    if (err)
      console.log(err);
    else {
      console.log(`${filename} is ready!`);
    }
});
