const express = require('express');

const path = require('path');

const rootDir = require('../utils/path');


const router = express.Router();

router.use('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;