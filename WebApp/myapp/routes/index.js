var express = require('express');
var router = express.Router();
var mysql = require('mysql');
const { compile } = require('pug');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Database--1", //Ändern
  database: "aframe"
});

con.connect(function (err) {
  if(err) throw err;

  console.log("Connected");
});



/* GET home page. */
router.get('/', function(req, res, next) {
  con.query( 'Select * from score order by score desc', function(err, result) {
    if(err) {
      res.status(404).send('Problem mit der Datenbank ist aufgetreten');
      throw err;
    }
    res.render('index', {scoreboardList: result});
  });
});

/*
router.get('/getUser/:usersName', function(req, res, next) {
  var usersName = req.params.usersName;
  console.log(usersName);
  var conString = `SELECT * FROM users WHERE lastname= '${usersName}'` 
  console.log(conString);
  con.query(conString, function(err, userList) {
      if(err) {
        res.status(404).send(err);
        return;
      }
      res.render('listUsers', {title: 'addGame', users: userList});
    });
});

router.post('/addUser', function(req, res, next) {
  var conString = `INSERT INTO users (lastname, firstname, age, job)  VALUES ( '${req.body.lastname}','${req.body.firstname}',${req.body.age}, '${req.body.job}')`
  console.log(conString);
  con.query(conString, function(err, result) {
      if(err) {
        res.status(404).send(err);
        return;
      }

      res.send("Added");
    });  
});

router.delete('/deleteUser/:lastname', function(req, res, next) {
  var lastname = req.params.lastname;
  console.log(lastname);
  con.query( 'DELETE FROM users WHERE lastname = "' + lastname + '"', function(err, result) {
    if(err) {
      res.status(404).send('Problem mit der Datenbank ist aufgetreten');
      throw err;
    }
    res.send("erfolgreich");
  });
});
*/
module.exports = router;
