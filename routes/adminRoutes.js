const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');
//route handling middleware
router.get('/add-product',productController.getProduct);

router.get('product', (req,res,next) =>{
   req.body();
   res.redirect('/');
});

module.exports = router;