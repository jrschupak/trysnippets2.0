var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.static('./dist'));
app.listen(PORT, function(err) {
  if (err) {
    console.log('error starting server');
    console.log(err);
  } else {
    console.log('server up and running on port', PORT);
  }
});
