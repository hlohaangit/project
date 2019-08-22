// @purpose: to calculate time between to enters on console
// @author: Harshit Lohaan
// @since: 08/22/19
// @overview: main file to calculate time makes a call to BL file



const inut = require('readline-sync')
const stopwatchObject = require('./stopwatchBL')

var start = stopwatchObject.start();
var stop = stopwatchObject.stop();
console.log(stopwatchObject.calculateTime(start,stop));