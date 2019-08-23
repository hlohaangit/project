var input= require('readline-sync');

// @purpose: makes variable and stores the time
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: stores the initial time 



var start = () =>{
    var temp = input.question("Press Enter to Start the timer ");
    return (new Date).getTime();
}


// @purpose: makes variable and stores the time
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: stores the final time
var stop = () => {
    var temp = input.question("Press Enter to Stop the Timer ");
    return (new Date).getTime();
}


// @purpose: calculate the difference 
    // @author: Harshit Lohaan
    // @since: 08/20/19
    // @overview: calculate the differnce in 2 input times date obj that have been passed as arguments
    

var calculateTime = (startTime, endTime) => {
    return (endTime-startTime)/1000;// since the time is in milliseconds it is divided by 1000 to get time in seconds
}


module.exports = {start,stop,calculateTime}