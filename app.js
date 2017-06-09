var express = require('express');
var app = express();
var path = require('path');

var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

app.use(express.static('public'));

server.listen(8080);
console.log("listening on 8080");
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var amazondashconfig = require('./config/config.json');

console.log("--------------- START BROWSER NOW --------------------");

io.on('connection', function (socket) {
	console.log("--------------- BROWSER CONNECTED --------------------");
	console.log("--------------- BROWSER CONNECTED --------------------");

//// ROOM ONE
    socket.on('roomOneDetected', function(){
        io.emit('btnRoomOne', { message: amazondashconfig.rmone.room_name + ' Detected!', data: amazondashconfig.rmone});
        console.log("room one button clicked");
    });

    socket.on('roomOneClicked', function(){
        console.log("room one tab clicked");
        io.emit('disableRoomOne', { message: amazondashconfig.rmone.room_name + ' Detected!', data: amazondashconfig.rmone});
    });
//// ROOM TWO
    socket.on('roomTwoDetected', function(){
        console.log("room two button clicked");
        io.emit('btnRoomTwo', { message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    });

    socket.on('roomTwoClicked', function(){
        console.log("room two tab clicked");
        io.emit('disableRoomTwo', { message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    });
//// ROOM THREE
    socket.on('roomThreeDetected', function(){
        console.log("room three button clicked");
        io.emit('btnRoomThree', { message: amazondashconfig.rmthree.room_name + ' Detected!', data: amazondashconfig.rmthree});
    });

    socket.on('roomThreeClicked', function(data){
        console.log("room three tab clicked");
        io.emit('disableRoomThree', { message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    });
//// ROOM FOUR
    socket.on('roomFourDetected', function(){
        console.log("room four button clicked");
        io.emit('btnRoomFour', { message: amazondashconfig.rmfour.room_name + ' Detected!', data: amazondashconfig.rmfour});
    });

    socket.on('roomFourClicked', function(){
        console.log("room four tab clicked");
        io.emit('disableRoomFour', { message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    });
//// ROOM FIVE
    socket.on('roomFiveDetected', function(){
        console.log("room five button clicked");
        io.emit('btnRoomFive', { message: amazondashconfig.rmfour.room_name + ' Detected!', data: amazondashconfig.rmfour});
    });

    socket.on('roomFiveClicked', function(){
        console.log("room five tab clicked");
        io.emit('disableRoomFive', { message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    });
//// ROOM SIX
    socket.on('roomSixDetected', function(){
        console.log("room six button clicked");
        io.emit('btnRoomSix', { message: amazondashconfig.rmsix + ' disable!', data: amazondashconfig.rmone});
    });

    socket.on('roomSixClicked', function(data){
        console.log("room six tab clicked");
        io.emit('disableRoomSix',{message: amazondashconfig.rmone + ' disable!', data: amazondashconfig.rmone});
    })
});

module.exports = app;
module.exports = express;