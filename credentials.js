const { default: mongoose } = require("mongoose");

const creedentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Creedentials", creedentialsSchema, "creedentialsVarias")