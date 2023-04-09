// models/student.js

import mongoose from 'mongoose'; // import mongoose

const studentSchema = new mongoose.Schema({ // create student schema
    name: String,
    email: String,
    // add more fields
});

const student = mongoose.model('student', studentSchema); // create student model

export default student; // export student model