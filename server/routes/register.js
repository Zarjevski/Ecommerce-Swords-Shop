const express = require('express')
const router = express.Router()
const registerController = require('../controllers/register.js')

router.post('/', registerController.newRegister)

module.exports = router