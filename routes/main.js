const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render('index', { title: 'main page', h1: 'Main page' });
})

module.exports = router;