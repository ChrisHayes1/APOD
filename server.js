const path = require('path');
var express = require('express');
var app = express();


app.use(express.static(path.join(__dirname,'View')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname,  path.join('public', 'stylesheets'))));

console.log(path.join(__dirname, 'View'));
console.log(path.join(__dirname, 'public'));
console.log('/css', path.join(__dirname, path.join('public', 'stylesheets')));

var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port);
});