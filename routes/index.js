const express = require('express');
const router = express.Router();

let index = require('../contoller/index');

router.get('/',index.index);

module.exports = router