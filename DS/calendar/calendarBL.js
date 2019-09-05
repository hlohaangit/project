const dayOfWeek = require("../utility/findDayOfWeek")
const queue = require("../utility/queueUsingLinkedList")

class weekDay {
    constructor(day, month, year) {
        if (day == 0) {
            this.dayOfMonth = " ";
            this.dayOfWeek = " ";
            
        } else {
            this.dayOfMonth = day;
            this.dayOfWeek = dayOfWeek.findDayOfWeek(this.dayOfMonth, month, year);
        }

    }
    // returns day of week. 
    //0 = Sun, 1 = Mon,  2 = Tue, 3 = Wed.......
    dayOfWeek() {
        return this.dayOfWeek();
    }
    //returns date in a months
    dateOfMonth() {
        return this.dayOfMonth;
    }
}

/**
 * @description : prints the calendar of given month and year
 * @param {month} month of required calendar
 * @param {year} year of required calendar
 */
var drawCalendar = (month, year) => {
    var daysQueue = new queue();
    var weeksQueue = new queue();
    weeksQueue.enqueue("S ");
    weeksQueue.enqueue("M ");
    weeksQueue.enqueue("T ");
    weeksQueue.enqueue("W ");
    weeksQueue.enqueue("T ");
    weeksQueue.enqueue("F ");
    weeksQueue.enqueue("S ");


    var monthDays = 31;
    if (month == 2) {
        monthDays = isLeapYear(year) ? 29 : 28;
    } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) monthDays = 31;
    else monthDays = 30;

    var remainingDaysInFirstWeek = dayOfWeek.findDayOfWeek(1, month, year);
    while (remainingDaysInFirstWeek-- > 0) {
        daysQueue.enqueue(new weekDay(0,month,year));
    }

    for (let iterator = 1; iterator <= monthDays; ++iterator) {
        daysQueue.enqueue(new weekDay(iterator, month, year));
    }
    
    // console.log("S  M  T  W  T  F  S");
    weeksQueue.print();
    var queueSize = daysQueue.size();
    var counter = 0;
    while(daysQueue.size() != 0){
        var date = daysQueue.dequeue().dayOfMonth.toString();
        if(date < 10){
            process.stdout.write(date+"  ");
        }else{
            process.stdout.write(date+" ");
        }
        counter++;
        if(counter == 7){
            console.log(" ");
            counter = 0;
        }
    }
    console.log()
}

module.exports = {drawCalendar}
