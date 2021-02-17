console.log("time to start the timer!");
//setting variables to be inumerated
let hour = 0;
let minute = 0;
let second = 0;
//stopT for if its runnoing or not
let stopT = true;
//select the p element
let timeDisplay = document.querySelector('p');
//set the context to 0
timeDisplay.textContent = 0;

//console.log(timeDisplay);
//function for running the timer on start button click
function startTime() {
    if (stopT == true) {
        stopT = false;
        timeAdd();
    }
}
//function for stopping the timer on button click
function stopTime() {
    if(stopT == false) {
        stopT = true;
    }
}
//function for running the timer
function timeAdd() {
    //if running
    if (stopT == false) {
    second = parseInt(second);
    minute = parseInt(minute);
    hour = parseInt(hour);
    second = second + 1;
    //add time to the timer
        // if seconds variable reaches 60, increment minute
        if (second == 60) {
            minute++;
            second = 0;
        }
        //if minute variable reaches 60, increment hour
        if (minute == 60) {
            hour++;
            minute = 0;
        }
        //if variables are between 0 and ten append a 0 before the variable value
        if (second < 10 || second == 0) {
            second = '0' + second;
        }
        if (minute < 10 || minute == 0) {
            minute = '0' + minute;
        }
        if (hour < 10 || hour == 0) {
            hour = '0' + hour;
        }
        //display the time that is being calculated
        timeDisplay.innerHTML = hour + ':' + minute + ':' + second;
        //run this every second to increment
        setTimeout("timeAdd()", 1000);
    }
}
//reset function back to zero
function resetTime() {
    timeDisplay.innerHTML = '00:00:00';
    second = 0;
    minute = 0;
    hour = 0;
}