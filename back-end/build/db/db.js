"use strict";
const mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "EIO"
});
module.exports = db;
