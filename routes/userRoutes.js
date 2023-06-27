const express = require('express');
const { loginController, registerController, authController, sectionController, getAllNotificationController, deleteAllNotificationController} = require('../controllers/userCtrl');
const authMiddleware = require('../middlewares/authMiddleware');

//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST
router.post('/register', registerController);

//Auth || POST
router.post('/getUserData', authMiddleware, authController);

//Section || POST
router.post('/section', authMiddleware, sectionController);

//Notification Teacher || POST
router.post('/get-all-notification', authMiddleware, getAllNotificationController);

//Notification Teacher || POST
router.post('/delete-all-notification', authMiddleware, deleteAllNotificationController);

module.exports = router;