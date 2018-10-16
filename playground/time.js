//0 => Jan 1st 1970 00.00.00 am
//const date = new Date();
//console.log(date.getMonth());

const moment = require('moment');

let date = moment();
console.log(date.format('DD MMM YYYY'))