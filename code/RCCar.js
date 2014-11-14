var five = require("johnny-five");
var myBoard, leftForward, leftBackward, rightForward, rightBackward;

myBoard = new five.Board();

// Setup pins and initialize RC wheels to be off
// TODO - for some crazy reason on != on, so to turn things on you have to tur them off via code.
myBoard.on("ready", function() {

    leftForward = new five.Led(13);
    leftBackward = new five.Led(12);

    rightForward = new five.Led(11);
    rightBackward = new five.Led(10);

    stop();

    setTimeout(forward(), 5000);
});

function forward() {

    stop();

    leftBackward.off();
    rightBackward.off();
}

function reverse() {

    stop();

    leftForward.off();
    rightForward.off();
}

function forwardLeft() {

    stop();

    leftForward.off();
}

function stop() {
    leftForward.on();
    leftBackward.on();

    rightForward.on();
    rightBackward.on();
}