const router     = require('express').Router();
const controller = require('../controllers/phones_controllers.js');

router.get('/', controller.getPhones);

module.exports = router