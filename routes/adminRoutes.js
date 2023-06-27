const express = require('express')
const authMiddleware = require('../middlewares/authMiddleware')
const { getAddTeacherController } = require('../controllers/adminCTRL.JS')
const { getUpdateTeacherController } = require('../controllers/adminCTRL.JS')

const router = express.Router()


//GET METHOD || AddTeacher
router.get('/getAddTeacher', authMiddleware , getAddTeacherController )

//GET METHOD || UpdateTeacher
router.get('/getUpdateTeacher', authMiddleware , getUpdateTeacherController )

module.exports = router