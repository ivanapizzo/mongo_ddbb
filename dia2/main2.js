let mongoose = require("mongoose");
let Photo = require("./photos")



mongoose.connect('mongodb+srv://ivipizzo:bocajuniors12I@cluster77.w7iii0u.mongodb.net/codenotch', 
                {useNewUrlParser: false, useUnifiedTopology: false})


let photoDocument = new Photo ({
    name: "Ivana",
    url: "https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/p/_/p_pink_hawaiian_coral_1-w.jpg",
    title: "Peony",
    description: "This peony was made for you"

})

photoDocument.save().then((data) => {

    console.log("Save correctly :)")
    console.log(data);
}) .catch((err) => {
    console.log("Error 404 not found" + err)
})


Photo.findOne({url: "https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/p/_/p_pink_hawaiian_coral_1-w.jpg"})
        .then (function(items){
        console.log("This is the photo from that user" + items)
        })
        .catch(function()
        {
        console.log("Error")
        })


Photo.updateOne({name: "Ivana"}, {description: "We have a new Peony"})
        .then((dato) => {
            console.log("Save change correctly")
            console.log(dato)
        })
        .catch((error) => {
            console.log(error)
        })



Photo.deleteOne({url: "https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/p/_/p_pink_hawaiian_coral_1-w.jpg"})
        .then(function(items){
            console.log("Photo has been deleted correctly");
            console.log(items);
            // mongoose.disconnect();
        })
        .catch(function(){
            console.log("Error")
        })


        
Photo.findOneAndDelete({url: "https://www.johnscheepers.com/media/catalog/product/cache/0e0f8b55cb1429f46d7faa85732ae262/p/_/p_pink_hawaiian_coral_1-w.jpg"})
        .then(function(items){
            console.log("Photo has been deleted correctly");
            console.log(items);
            // mongoose.disconnect();
        })
        .catch(function(){
            console.log("Error")
        })
