let express = require('express');
let app = express();
const port = 3000
app.get('/', function (req, res) {
  res.send('Hello World!');
});

let server = app.listen(port, function () {

  console.log('Example app listening at http://localhost:%s', port);
});
