const { default: mongoose } = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    role: String, 
    verified: Boolean
})

// nombre del modelo + esquema + nombre de la coleccion (tabla)
module.exports = mongoose.model("User", userSchema, "users");