/**
 * @overview : Calendar
 * @description : Draw a calendar of given month and year
 * @author : Vaibhav Pratihar
 * @since : 08/20/2019
 */

const input = require("readline-sync");
const calendar = require("./calendarBL");

var month = process.argv[2];
var year = process.argv[3];

calendar.drawCalendar(parseInt(month),parseInt(year));
