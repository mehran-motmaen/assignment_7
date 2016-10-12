var express = require('express');
var router = express.Router();
var fs = require('fs');
var mongodb = require('mongodb');
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';


/* GET home page. */
router.get('/', function(req, res, next) {

  // mongodb.connect(url , function (err , db) {db.collection('user-data').drop(); db.close();});
  res.writeHead(200,{'Content_Type':'text/html'});
  fs.readFile('./login_form.html',null,function (error , data) {
    if(error){
      res.write("Page Not Found!")
    }
    else {
      res.write(data);
    }

    res.end();
  })
});

router.post('/login/',function (req , res , next) {
  /*console.log('in post function');
   console .log(req.param('username'));
   console.log(req.param('password'));
   */
  var authentication = false;
  var item = {
    username : req.body.username,
    password : req.body.password
  };

  mongodb.connect(url , function (err , db) {
    assert.equal(null , err);
    db.collection('user-data').findOne({ 'username' : item.username , 'password' : item.password }, function(err, doc) {
      if( doc == null ) {
        console.log('Not in Database, Register first');
        res.redirect('/register');
      } else {
        res.redirect('/users');
      }
      db.close();
    });
  });

});

router.get('/get-data',function (req,res,next) {
  var result_array =[];
  mongodb.connect(url , function (err , db) {
    assert.equal(null , err);
    var cursor = db.collection('user-data').find();
    cursor.forEach(function (doc , err) {
      assert.equal(null , err);
      result_array.push(doc);
    },function () {
      db.close();
      res.json(result_array);
    });
  });
});



module.exports = router;
