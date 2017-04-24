const express = require('express');
const app = express();
const router = express.Router();


// router.use('/', function (request, response) {
//   console.log('Recieved some request')
// });

app.use(function (request, response, next) {
  // console.log(Object.keys(request));
  console.log(request.method, request.url);
  next();
})

app.get('/', function (request, response) {
  response.send('Welcome to nothing.');
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
