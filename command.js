// It is expected that the file full of FEN strings will be passed in as an arg:
//
//    phantomjs commands.js checkmate_puzzles_60.txt
//
//
// Get passed in arguments:
var system = require('system');
var fenFilename = system.args[1];

var readFenStrsFromFile = function(filename) {
  var fs = require('fs');
  var file = fs.open(filename, 'r');

  while(!file.atEnd()) {
    var line = file.readLine();
    renderFenStr(line);
  }
  file.close();
}

var renderFenStr = function(fenStr) {
  var page = require('webpage').create();
  var fenUnderScore = fenStr.replace(/\//g, "_").split(" ")[0], fenQuery = "";

  if(fenStr == "") {
    fenUnderScore = "starting-position";
  } else {
    fenQuery = "?" + fenStr;
  }

  var url = "file:////Users/tlehman/src/chessview/playground/starting-position.html"+ fenQuery.replace(/\ /g, "%20");
  var output = "img/" + fenUnderScore + ".png";

  var command = "phantomjs rasterize.js '" + url + "' " + output + ";";

  console.log(command);
}

readFenStrsFromFile(fenFilename);
phantom.exit();
