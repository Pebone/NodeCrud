const controller = require('../controller/userController');

const express = require('express');

const router = express.Router();

router.post('/create', controller.create)

module.exports = router;