const router     = require('express').Router();
const controller = require('./controllers.js');

router.get('/', controller.getPhones);

module.exports = router;