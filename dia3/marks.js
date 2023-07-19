const { default: mongoose } = require("mongoose");
let {marks, teachers} = require("./teachers")

const teachersSchema = new mongoose.Schema({
    teachers_first_name: String,
    teachers_last_name: String
})

const marksSchema = new mongoose.Schema({
    data: Date,
    mark: Number,
    student_first_name: String,
    students_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teachersSchema],
})


teachersSchema.add({marks: [marksSchema]});

let MarksModel = mongoose.model("mark", marksSchema, "marks");
let TeachersModel = mongoose.model("teacher", teachersSchema, "teachers");

// module.exports = mongoose.model("Mark", marksSchema, "marks");
// module.exports = mongoose.model("Teacher", teachersSchema, "teachers");

module.exports = {MarksModel, TeachersModel}

