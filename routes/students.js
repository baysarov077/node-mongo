const { Router } = require('express')
const { studentsController } = require('../students/students.js')
const router = Router()

router.post('/students', studentsController.postStud)
router.get('/students', studentsController.getStud)
router.delete('/students/:id', studentsController.deleteStud)
router.patch('/studens', studentsController.patchStud)
module.exports = router