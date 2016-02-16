var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.use(function(err, req, res, next){
  res.send('payload format incorrect');
});

app.post('/checkSignature', function(req, res) {
  if(req.body.length == 3){
    res.send(checkInput(req.body));
  } else {
    res.send('payload has incorrect size');
  }
});

function checkInput(array) {
  console.log(array);
  if(
    array[0].x < array[1].x && array[0].x < array[2].x &&
    array[1].x > array[0].x && array[1].x > array[2].x &&
    array[2].y > array[0].y && array[2].y > array[1].y
  ) {
    return true;
  } else {
    return false;
  }
}

app.listen(3000, function () {
  console.log('server listening on port 3000');
});
