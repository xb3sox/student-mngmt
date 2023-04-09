// controllers/studentController.js

// get all students
// get student by id
// create student
// update student
// delete student

// import student model
import Student from '../models/student.js';
import mongoose from 'mongoose';

// get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create student
const createStudent = async (req, res) => {
    const { name, age, gender } = req.body;
    const newStudent = new Student({ name, age, gender });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// get student by id
const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// update student
const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, age, gender } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);
    const updatedStudent = { name, age, gender, _id: id }
    try {
        await Student.findByIdAndUpdate(id, updatedStudent, { new: true });
        res.json(updatedStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// delete student
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);
    try {
        await Student.findByIdAndRemove(id);
        res.json({ message: "Student deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


// delete all students
const deleteAllStudents = async (req, res) => {
    try {
        await Student.deleteMany();
        res.json({ message: "All students deleted successfully." });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export all functions
export default { getAllStudents, createStudent, getStudentById, updateStudent, deleteStudent, deleteAllStudents };