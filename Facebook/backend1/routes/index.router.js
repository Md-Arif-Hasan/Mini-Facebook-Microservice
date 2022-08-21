const express = require('express');
const router = express.Router();
const multer = require('multer');
const app=express();



const userController = require('../controllers/user.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', userController.register);

router.post('/authenticate', userController.authenticate);
//not
router.get('/userProfile', jwtHelper.verifyJwtToken ,userController.userProfile);
module.exports = router;
