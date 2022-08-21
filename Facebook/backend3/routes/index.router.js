const express = require('express');
const router = express.Router();
const multer = require('multer');


const app=express();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));



const storyController = require('../controllers/story.controller');


router.use(express.static(__dirname + "./public/"));


router.post('/story', upload.single("file") , storyController.addstory);
router.get('/story/:email',  storyController.getday);

module.exports = router;
