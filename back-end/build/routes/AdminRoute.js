"use strict";
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/AdminController');
router.get('/', adminController.getAdmin);
module.exports = router;
