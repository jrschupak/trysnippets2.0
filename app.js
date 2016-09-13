var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static('/app'));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(_dirname, 'index.html'))
});
app.listen(PORT, function(err) {
  if (err) {
    console.log('error starting server');
    console.log(err);
  } else {
    console.log('server up and running on port', PORT);
  }
});
