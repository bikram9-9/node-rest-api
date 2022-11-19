const express = require('express');
const router = express.Router();

router.get('/shop',(req,res,next) =>{
    res.send('<h2> I am in shop</h2>')
});

module.exports = router;    