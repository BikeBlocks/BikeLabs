var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/rfcomm0", {
  baudrate: 9600
});

var yolo = 0;

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  setInterval(function() {
    serialPort.write("koukoukoux" + yolo, function(err, results) {
      console.log('err ' + err);
      console.log('results ' + results);
      yolo ++;
    });
  },1000)

});