var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('** Welcome to NodeJsDeployment !!!! **'); //write a response to the client
  res.end(); //end the response
}).listen(8081); //the server object listens on port 8081
