const express = require('express');
const router = express.Router();
const multer = require('multer');


const app=express();


const postController = require('../controllers/post.controller');

router.post('/post', postController.addpost);
router.get('/post/:email', postController.getpost);


module.exports = router;
