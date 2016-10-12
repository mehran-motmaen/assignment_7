var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.writeHead(200,{'Content_Type':'text/html'});
  fs.readFile('./user_form.html',null,function (error , data) {
    if(error){
      res.write("Page Not Found!")
    }
    else {
      res.write(data);
    }
    res.end();
  })
});

module.exports = router;
