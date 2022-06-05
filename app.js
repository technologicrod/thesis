const { Router } = require('express');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
const port = process.env.PORT || 8080;
app.listen(port,);

app.get('/', function (req, res) {
    let data = {
        url: req.url
    }
    res.render('pages/home', data);
})