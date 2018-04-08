var express = require('express');
var app = express();
app.use(express.static('public'));

var hbs = require('hbs');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.set("views", "views");

var Emoji = require('./src/allEmoji');

app.get("/", function (request, response) {
  var form = "";
  var emoji = [];
  console.log("Request!");
  console.log(request.query);
  console.log(request.query.length);
  
  var query = request.query;
  for (var k in query) {
    var v = query[k];
    console.log(v);
  }
  
  var query = request.query;
  var count = 0;
  var valid = false;
  var blank = false;
  var form = true;
  for (var k in query) {
    if (k === "no" && query[k] === "emojis") {
      blank = true;
      break;
    }
    count += 1;
    break;
  }
  if (count > 0) { valid = true };
  
  if (blank) {
    emoji = [];
  } else if (valid) {
    for (var k in query) {
      var v = query[k];
      if (v >= 0 && v <= Emoji.length) {
        emoji.push(Emoji[v]);
      }
      form = false;
    }
  } else {
    emoji = Emoji;
  }
  response.render('index', {
    emoji:JSON.stringify(emoji),
    blank: JSON.stringify(blank),
    form: form
  });
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
