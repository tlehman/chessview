// Make sure to run http-server on this directory so that the page.open(...)
// call works correctly. See README.md for more details
var page = require('webpage').create();
page.open('http://localhost:8080/playground/starting-position.html', function(status) {
  console.log('Status: ' + status);
  if(status === "success") {
    page.render('starting-position.png');
  }
  phantom.exit();
});

