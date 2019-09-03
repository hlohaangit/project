/**
 * @overview : Find the day on date
 * @description : Use following formula to determine date
 * y0 = y − (14 − m ) / 12
 * x = y0 + y0 /4 − y0 /100 + y0 /400
 * m0 = m + 12 × ((14 − m ) / 12) − 2
 * d0 = ( d + x + 31 m0 / 12) mod 7
 * where date is d/m/y
 * day 0 - Sunday, day 1 - Monday and so on...
 * @param {day} Day of date
 * @param {month} month of date
 * @param {year} year of date
 */
var findDayOfWeek = (day, month, year) => {
    try {
        if (day < 0 || day > 31 || month < 0 || month > 12 || year < 0) {
            console.log("Here");
            throw error;
        }
        var y0 = (year - parseInt((14 - month) / 12));
        var x = y0 + parseInt(y0 / 4) - parseInt(y0 / 100) + parseInt(y0 / 400);
        var m0 = month + 12 * (parseInt((14 - month) / 12)) - 2;
        var d0 = parseInt((day + x + parseInt(31 * m0 / 12)) % 7);
        return d0;
    } catch (error) {
        console.log("Invalid Date");
    }

}

module.exports = {findDayOfWeek}