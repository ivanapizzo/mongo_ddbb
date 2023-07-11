let mongoose = require("mongoose");


const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    role: String
})

module.exports = mongoose.model("Profile", profileSchema, "profiles");


