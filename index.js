var eyeglass = require("eyeglass");
var fs = require("fs");
var nodeSass = require("node-sass");
var path = require("path");

var options = eyeglass({
  file: path.join(__dirname, "app.scss")
});

nodeSass.render(options, function(error, result) {
  if (error) {
    console.error(error);
  } else {
    fs.writeFileSync(path.join(__dirname, "app.css"), result.css);
  }
});
