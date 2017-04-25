const express = require('express');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const app = express();
const router = express.Router();

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(chalk.blue(output));
});

// router.use('/', function (request, response) {
//   console.log('Recieved some request')
// });

app.use(function (request, response, next) {
  // console.log(Object.keys(request));
  console.log(chalk.red(request.method, request.url));
  next();
})

app.get('/', function (request, response) {
  response.render('index', locals);
});


app.use('/news', function (request, response, next) {
  console.log("Accessing news");
  next();
});

app.get('/news', function (request, response, next) {
  response.send("Heres the news");
  next();
});


app.use('/news', router);

router.get('/abc', function(request, response, next){
  response.send("caw, caw, caw")
});

router.get('/bcd', function(request, response, next){
  response.send("bawk bawk bawk")
});

router.get('/cde', function(request, response, next){
  response.send("gobble gobble gobble")
});

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});













