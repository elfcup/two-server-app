var http = require("http");

var goodPORT = 7000;
var badPORT = 7500;

function handleRequest1(request, response) {
	response.end("It works!! Path Hit: " + request.url);
	console.log("You are a smart person!");
}

function handleRequest2(request, response) {
	response.end("It works!! Path Hit: " + request.url);
	console.log("You are a dunce cap");
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);


server1.listen(goodPORT, function() {
		console.log("It is listening");
	});

server2.listen(badPORT, function() {
	console.log("It is listening");
});
	
	

// if (badPORT === 7500) {
// 		console.log("You are a dunce cap!")
// 	}

// server.listen(badPORT, function() {
// 	console.log("You are a dunce cap: " +badPORT);
// });