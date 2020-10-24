//core modules
// const fs = require('fs');
// fs.readFile('package.json', 'utf-8', (err, data) => {
//   console.log(data);
// });

//local modules
const {printWithAsterisk} = require('./utils');
printWithAsterisk('hello');

//third-party
const _ = require('lodash');

const array = [1, 5, 10];
const lastElement = _.last(array);
printWithAsterisk(lastElement);