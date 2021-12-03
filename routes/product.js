var express = require('express');
var router = express.Router();
var data  = require("../assets/data");
/* GET products listing. Please establish connection with getProduct function from controllers/product.js  */


router.get('/', function (req, res, next) {
 
  let  dataSend = data.filter((product) => {
    console.log(product.name);
    return product.name.toLowerCase().includes(req.query.q);
  });
  res.send(
     dataSend
  );
});

module.exports = router;
