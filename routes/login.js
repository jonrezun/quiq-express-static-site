const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.render('auth/login', { title: 'main page', h1: 'Main page' });
})

module.exports = router;