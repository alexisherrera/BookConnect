var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.session.user === null) { res.render('../')}
  res.render('home', { title: 'home PAge' });
});

module.exports = router;
