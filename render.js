// Make sure to run http-server on this directory so that the page.open(...)
// call works correctly. See README.md for more details.
//
// It is expected that the FEN string will be passed in as a single-quote
// delimited argument:
//
//    phantomjs render.js 'N1b2rk1/pp4bp/3p2n1/3Pp2n/4Pp1q/5P2/PP2B1Pp/2RQNRBK b - - 0 21'
//
var page = require('webpage').create();
var system = require('system');
var args = system.args;
var fen = args[1];
var boardState = fen.split(" ")[0];

var renderFenStr = function(fenBoardState) {
  var fenUnderScore = fenBoardState.replace(/\//g, "_"),
      fenQuery = "";
  if(fenBoardState == "") {
    fenUnderScore = "starting-position";
  } else {
    fenQuery = "?" + fen;
  }

  page.open("http://localhost:8080/playground/starting-position.html"+fenQuery, function(status) {
    console.log('Status: ' + status);
    if(status === "success") {
      page.render(fenUnderScore + '.png');
    }
    phantom.exit();
  });
}


renderFenStr(boardState);
