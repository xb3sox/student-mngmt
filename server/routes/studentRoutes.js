// routes/studentRoutes.js

import express from 'express'; // import express
import studentController from '../controllers/studentController.js'; // import studentController

const router = express.Router(); // create router

// routes for student management
router.get('/', studentController.getAllStudents); // get all students
router.get('/student/:id', studentController.getStudentById); // get student by id
router.post('/student', studentController.createStudent); // create student
router.put('/student/:id', studentController.updateStudent); // update student
router.delete('/student/:id', studentController.deleteStudent); // delete student
router.delete('/students', studentController.deleteAllStudents); // delete all students

export default router; // export router