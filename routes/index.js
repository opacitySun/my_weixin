var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'welcome to sun weixin',layout: 'layout.html' });
});

module.exports = router;
