const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

app.use(volleyball);

const routes = require('./routes');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates




app.listen(3000, function() {
  console.log('Listening on port 3000...');
});





