const mysql = require("mysql2");
const express = require("express");

const pool = mysql.createConnection({
    // connectionLimit: 5,
    host: "db",
    user: "user",
    database: "db",
    password: "password"
});

module.exports = pool;