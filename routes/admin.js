const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');

const router = express.Router();

//routes like admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

//routes like admin/product => POST
router.post('/product', (req, res, next) => {
    console.log("req.body", req.body);
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
    res.redirect('/');
});

module.exports = router;