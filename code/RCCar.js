var five = require("johnny-five");
var myBoard, myLed;

myBoard = new five.Board();

myBoard.on("ready", function() {

    myLed = new five.Led(13)

    // try "on", "off", "toggle", "brightness",
    // "fade", "fadeIn", "fadeOut",
    // "pulse", "strobe",
    // "stop" (stops strobing, pulsing or fading)

    myLed.on();

});