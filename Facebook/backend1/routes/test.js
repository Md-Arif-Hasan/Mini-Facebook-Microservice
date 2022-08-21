const { response } = require('express');
const express = require('express');
const router = express.Router();
const app=express();

router.get("", (req, res) => {
    res.status(200).send("aschi");
}
)

module.exports = router;