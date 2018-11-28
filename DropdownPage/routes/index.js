var express = require('express');
var mysql = require('mysql');
var router = express.Router();
const shell = require('shelljs');

var fs = require("fs");
var app = express();

app.use(express.static('public'))



router.get('/', function(req, res, next) {
  	res.render('index');
});

router.post('/execute', function (req, res, next) {
	const osr = req.body.osr;
    const genomer = req.body.genomer;
    const g1r = req.body.g1r;
    const g2r = req.body.g2r;
	const verr = req.body.verr;
    const corr = req.body.corr;
    const phr = req.body.phr;
    const avr = req.body.avr;
    const phr2 = req.body.phr2;
    const bvr = req.body.bvr;
    const email = req.body.email;

    fs.writeFile("/Users/anthonymammoliti/Desktop/PSetCreation/selection.txt", email + '\n' + osr + '\n' + genomer + '\n' + g1r + '\n' + g2r + '\n' + verr + '\n' + corr + '\n' + phr + '\n' + avr + '\n' + phr2 + '\n' + bvr , function (err) {
    shell.exec('/Users/anthonymammoliti/Desktop/PSetCreation/process.sh');
    // Checks if there is an error
    if (err) return console.log(err);
    });
    
    
    res.send('success');
});


module.exports = router;





