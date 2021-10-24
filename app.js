const express = require("express");
const app = express();
engine = require('ejs-mate');

require('./startup/routes')(app);

app.use(express.static("public"));
app.listen(3000, () => {
    console.log("this app start on 3000 port")
})

module.exports = app;