var express = require('express');

var app = express();
const PORT = process.env.PORT || 4000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
      //console.log('http://' + req.hostname + req.url);
    next();

  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log('Server is running on port' + PORT);
});
