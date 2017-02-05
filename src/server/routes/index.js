var router = require('express').Router();
var db = require('../db')
var messages = require('./messages');

router.use('/messages', messages);

module.exports = router;
