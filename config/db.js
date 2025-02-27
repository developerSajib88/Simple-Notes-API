const mongoose = require("mongoose");
const config = require("./config");
const { error } = require("../services/response.service");

const database = config.db.url;
mongoose.connect(database).then(()=>{
    console.log("Mongoose is connected.");
}).catch(()=>{
    console.log(error);
});