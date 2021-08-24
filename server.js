const express = require('express');
const api = require('./api')
const app = express();

app.get('/', function (req, res) {
   res.send(api.pageObj);
   //res.send("hello !")
   
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
  // console.log("Example app listening at http://%s:%s", host, port)
})