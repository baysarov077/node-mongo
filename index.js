const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
mongoose.connect("mongodb+srv://baysarov077:Avenger95@cluster0.9anwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
        .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

let port = 4000

app.get('/', (req, res) => res.json('Hello Adam'))
app.use(require('./routes/students.js'))

app.listen(port, () => console.log('Hello'))
