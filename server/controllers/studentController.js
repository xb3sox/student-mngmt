// controllers/studentController.js

// get all students
// get student by id
// create student
// update student
// delete student

// import student model
import student from '../models/student.js';



// get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// get student by id
const getStudentById = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await student.findById(id);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// create student
const createStudent = async (req, res) => {
    const { name, email, phone, address } = req.body;
    const newStudent = new student({ name, email, phone, address });
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// update student
const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, address } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);
    const updatedStudent = { name, email, phone, address, _id: id }
}

// delete student
const deleteStudent = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No student with id: ${id}`);
    await student.findByIdAndRemove(id);
    res.json({ message: "Student deleted successfully." });
}

// delete all students
const deleteAllStudents = async (req, res) => {
    await student.deleteMany();
    res.json({ message: "All students deleted successfully." });
}

// export all functions
export default {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
    deleteAllStudents
}
