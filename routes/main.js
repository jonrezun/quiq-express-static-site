const express = require("express");
const router = express.Router();
const db = require("../startup/db")
const pool = require("../startup/db");

router.get("/", (req, res) => {

    db.query("SELECT * FROM users", function(err, data) {
        if(err) return console.log(err);
        res.render('index', { title: 'main page', h1: 'Main page', list: data });
    });
})

module.exports = router;