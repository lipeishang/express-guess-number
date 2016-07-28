var express = require('express');
const CompareNumber = require('./compare-number');
const AnswerGenerate = require('./Answer-Generator');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/answer', function (req, res) {
  const answer = AnswerGenerate.generate();
  res.send(answer);
});

app.post('/', function (req, res) {
  const answer = CompareNumber.compare(req.body.input, req.body.answer);
  res.send(answer);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});