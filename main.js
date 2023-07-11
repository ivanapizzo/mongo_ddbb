let mongoose = require("mongoose");
let User = require("./user");
const Profile = require("./profile");
const credentials = require("./credentials");


mongoose.connect('mongodb+srv://ivipizzo:bocajuniors12I@cluster77.w7iii0u.mongodb.net/codenotch', 
                {useNewUrlParser: false, useUnifiedTopology: false

})

let usersDocument = new User ({
    name: "Danna",
    email: "dannadannet@gmail.com", 
    role: "Creative director", 
    verified: true,
})

usersDocument.save().then((data) =>{
    
    console.log("Save correctly");
    console.log(data);
}) .catch((err) => {
    console.log("Error 404 not found" + err)
})



let profileDocument = new Profile({
    name: "Felipe",
    surname: "Gonzalez",
    dateOfBirth: 1989,
    comments: "Felo alias Fer",
    role: "dj/ productor"

})

profileDocument.save().then((data) => {

    console.log("Save correctly");
    console.log(data);
}) .catch((err) => {
    console.log("Error 404 not found" + err)
})


let creedentialsDocument = new credentials ({
    address: "Rufino 22",
    phone: 651797654,
    email: "ivis@ivana.com"
})

creedentialsDocument.save().then((data) => {

    console.log("Save correctly");
    console.log(data);
}) .catch((err) => {
    console.log("Error 404 not found" + err)
})



// let searchDocumentById.find({"dateOfBirth": 1970})
// console.log(searchDocumentById)

// db.users.find(
//     {"_id": "64adaa1bcb2b973af282b23e"});