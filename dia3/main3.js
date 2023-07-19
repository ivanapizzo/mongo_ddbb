const { default: mongoose } = require("mongoose");
const teachers = require("./teachers");
const marks = require("./marks");
const { MarksModel } = require('./marks') 
const { TeachersModel } = require('./marks') 


mongoose.connect('mongodb+srv://ivanapizzo:bocajuniors12I@cluster77.w7iii0u.mongodb.net/school',
{useNewUrlParser: false, useUnifiedTopology: false})


// -------------------------------> teachers <------------------------------- //

// let teacherOne = new teachers ({
//     teachers_first_name : "Minerva",
//     teachers_last_name : "Mcgonagall"
// })

// teacherOne.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherTwo = new teachers ({
//     teachers_first_name: "Albus",
//     teachers_last_name: "Dumbledore"
// })

// teacherTwo.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherThree = new teachers ({
//     teachers_first_name: "Remus",
//     teachers_last_name: "Lupin"
// })

// teacherThree.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherFour = new teachers ({
//     teachers_first_name: "Alastor",
//     teachers_last_name: "Moody"
// })


// teacherFour.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherFive = new teachers ({
//     teachers_first_name: "Severus",
//     teachers_last_name: "Snape"
// })

// teacherFive.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })

// let teacherSix = new teachers ({
//     teachers_first_name: "Horace",
//     teachers_last_name: "Slughorn"
// })

// teacherSix.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherSeven = new teachers ({
//     teachers_first_name: "Rubeus",
//     teachers_last_name: "Hagrid"
// })

// teacherSeven.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherEight = new teachers ({
//     teachers_first_name: "Pomona",
//     teachers_last_name: "Sprout"
// })

// teacherEight.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherNine = new teachers ({
//     teachers_first_name: "Filius",
//     teachers_last_name: "Fliwick"
// })

// teacherNine.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let teacherTen = new teachers ({
//     teachers_first_name: "Sybill",
//     teachers_last_name: "Trelawney"
// })

// teacherTen.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// -------------------------------> marks <------------------------------- //

// let markOne = new marks ({
//     date: "04-07-2023",
//     mark: 5,
//     student_first_name: "Harry",
//     students_last_name: "Potter",
//     group_name: "Gryffindor", 
//     subject_name: "Encantamientos",
//     teachers: ["Minerva Mcgonagall", "Albus Dumbledore"]

// })

// markOne.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })


// let markTwo = new marks ({
//     date: "30-06-2023",
//     mark: 10,
//     student_first_name: "Hermione",
//     students_last_name: "Granger",
//     group_name: "Gryffindor",
//     subject_name: "Posiones",
//     teachers: ["Minerva Mcgonagall", "Albus Dumbledore"]
// })

// markTwo.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markThree = new marks ({
//     date: "28-06-2023",
//     mark: 4,
//     student_first_name: "Ron",
//     students_last_name: "Weasley",
//     group_name: "Gryffindor",
//     subject_name: "Quiddicth",
//     teachers: ["Rolanda Hooch", "Albus Dumbledore"]
// })

// markThree.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markFour = new marks ({
//     date: "27-05-2023",
//     mark: 3,
//     student_first_name: "Neville",
//     students_last_name: "Longbottom",
//     group_name: "Gryffindor",
//     subject_name: "Defensa contra las artes oscuras",
//     teachers: ["Severus Snape", "Remus Lupin"]
// })

// markFour.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markFive = new marks ({
//     date: "20-06-2023",
//     mark: 7,
//     student_first_name: "Draco",
//     students_last_name: "Malfoy",
//     group_name: "Slytherin",
//     subject_name: "Hebología",
//     teachers: ["Pomona Sprout", "Albus Dumbledore"]
// })

// markFive.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markSix = new marks ({
//     date: "19-06-2023",
//     mark: 1,
//     student_first_name: "Vincent",
//     students_last_name: "Crabbe",
//     group_name: "Slytherin",
//     subject_name: "Música",
//     teachers: ["Filius Flitwick", "Remus Lupin"]
// })

// markSix.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markSeven = new marks ({
//     date: "03-07-2023",
//     mark: 2,
//     student_first_name: "Gregory",
//     students_last_name: "Goyle",
//     group_name: "Slytherin",
//     subject_name: "Transformaciones",
//     teachers: ["Minerva Mcgonagall", "Severus Snape"]
// })

// markSeven.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markEight = new marks ({
//     date: "02-06-2023",
//     mark: 8,
//     student_first_name: "Cedric",
//     students_last_name: "Diggory",
//     group_name: "Hufflepuff",
//     subject_name: "Adivinación",
//     teachers: ["Sybil Trelawney", "Rubeus Hagrid"]
// })

// markEight.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markNine = new marks ({
//     date: "15-07-2023",
//     mark: 9,
//     student_first_name: "Cho",
//     students_last_name: "Chang",
//     group_name: "Revenclaw",
//     subject_name: "Estudios Muggle",
//     teachers: ["Alastor Moody", "Albus Dumbledore"]
// })

// markNine.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })



// let markTen = new marks ({
//     date: "17-07-2023",
//     mark: 6,
//     student_first_name: "Jenny",
//     students_last_name: "Weasley",
//     group_name: "Gryffindor",
//     subject_name: "Alquimia",
//     teachers: ["Horace Slughorn", "Alastor Moody"]
// })

// markTen.save().then((data) => {

//     console.log("Save correctly :)")
//     console.log(data);
// }) .catch((err) => {
//     console.log("Error 404 not found" + err)
// })




// -------------------------------> RETO <------------------------------- //

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos. OK

// marks.MarksModel
// .aggregate([{$project: {
//                             student_first_name: 1, 
//                             students_last_name: 1, 
//                             _id: 0
//                         }
//                     }])
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => 
// console.log(error))


// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos. OK
// marks.TeachersModel
// .aggregate([{$project: {
//                             teachers_first_name: 1, 
//                             teachers_last_name: 1, 
//                             _id: 0
//                         }
//                     }])
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => 
// console.log(error))



// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5. AUN NO

marks.MarksModel
.aggregate([{$group: {"_id": null, "Materia": {"Materia" : "$subject_name"},
                    "Media mayor que 5" : {"$avg": "$mark"}}}, 
                    {$match: {$gt: 5}},
                    {$sort: {"Media mayor que 5" : 1}}])
.then((result) => {
    console.log(result)
})
.catch((error) => 
console.log(error))


// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos. OK

// marks.MarksModel
// .aggregate([{$count: "Número de alumnos en Hogwarts: "}])
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => 
// console.log(error))


// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos. AUN NO

marks.TeachersModel
.aggregate([{$unwind: "$teachers"},
            {$match: {"_id": "$subject_name", "Número de profesores en Hogwarts" : {$sum: 1}}}])
.then((result) => {
    console.log(result)
})
.catch((error) => 
console.log(error))


// Calcular la nota media de los alumnos de una asignatura concreta. OK

// marks.MarksModel
// .aggregate([{$match: {subject_name : "Posiones"}}, {$group: {"_id": null, "Nota media Posiones: ": {"$avg": "$mark"}}}])
// .then((result) => {
//     console.log(result)
// })
// .catch((error) => 
// console.log(error))


// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto. OK

// marks.MarksModel
// .aggregate([{$group: {"_id": {"Casas de Hogwarts y la cantidad de alumnos" : "$group_name"},
//                     "Cantidad": {"$sum" : 1}}},
//                     // {$match: { "Cantidad": {"$gt": 1}}},
//                     {$sort: {_id: -1}}])
// .then((result) => {
// console.log(result)
// })
// .catch((error) => 
// console.log(error))


// module.exports = {teacherOne, teacherTwo, markOne, markTwo, teacherThree}
