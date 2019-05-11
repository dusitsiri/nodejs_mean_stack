var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('Hello Express');
});

app.get('/About', function(req, res) {
    res.send('Hello from About');
});

app.get('/Contact', function(req, res) {
    res.send('Hello from Contact');
});

app.listen(3000, function () {
    console.log('Express running on port 3000')
});