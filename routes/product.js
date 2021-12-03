var express = require('express');
var router = express.Router();

/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */
router.get('/', function (req, res, next) {
  res.send(
    'To implement. Please establish connection with getProduct function from controllers/product.js'
  );
});

module.exports = router;
