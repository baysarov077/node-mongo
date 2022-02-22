const Student = require("../modules/Student.model")

module.exports.studentsController = {
    getStud: (req, res) => {
        Student.find().then(data => res.json(data))},
    deleteStud: (req, res) => {
        Student.findByIdAndRemove(req.params.id).then(() => res.json('Пользователь удален'))},
    patchStud: (req, res) => {
        Student.findOneAndUpdate(req.params.id, {name: req.body.name}).then(() => res.json('студент изменен'))},
    postStud: (req, res) => {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(() => res.json("Студент добавлен"))}
}
