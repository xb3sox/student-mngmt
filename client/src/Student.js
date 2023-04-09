import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:5000';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [editId, setEditId] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get(`${baseURL}/students`)
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(`${baseURL}/students`, {
            name: name,
            age: age,
            gender: gender,
        })
            .then(response => {
                setStudents([...students, response.data]);
                setName('');
                setAge(0);
                setGender('');
                setShowModal(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleEdit = (id, name, age, gender) => {
        setEditId(id);
        setName(name);
        setAge(age);
        setGender(gender);
        setShowModal(true);
    };

    const handleUpdate = (event) => {
        event.preventDefault();

        axios.put(`${baseURL}/student/${editId}`, {
            name: name,
            age: age,
            gender: gender,
        })
            .then(response => {
                setStudents(students.map(student => {
                    if (student._id === response.data._id) {
                        return response.data;
                    }
                    return student;
                }));
                setName('');
                setAge(0);
                setGender('');
                setEditId('');
                setShowModal(false);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`${baseURL}/student/${id}`)
            .then(response => {
                setStudents(students.filter(student => student._id !== id));
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Dashboard
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/students">
                                    Students
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <main role="main" className="col-md-10 ml-sm-auto px-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Students</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <button className="btn btn-sm btn-primary" onClick={() => setShowModal(true)}>
                                Add Student
                            </button>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student._id}>
                                        <td>{student.name}</td>
                                        <td>{student.age}</td>
                                        <td>{student.gender}</td>
                                        <td>
                                            <button className="btn btn-sm btn-primary mr-2" onClick={() => handleEdit(student._id, student.name, student.age, student.gender)}>
                                                Edit
                                            </button>
                                            <button className="btn btn-sm btn-danger" onClick={() => handleDelete(student._id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {showModal && (
                        <div className="modal" style={{ display: 'block' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">{editId ? 'Edit Student' : 'Add Student'}</h5>
                                        <button type="button" className="close" onClick={() => setShowModal(false)}>
                                            <span>&times;</span>
                                        </button>
                                    </div>
                                    <form onSubmit={editId ? handleUpdate : handleSubmit}>
                                        <div className="modal-body">
                                            <div className="form-group">
                                                <label>Name:</label>
                                                <input type="text" className="form-control" value={name} onChange={event => setName(event.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Age:</label>
                                                <input type="number" className="form-control" value={age} onChange={event => setAge(event.target.value)} required />
                                            </div>
                                            <div className="form-group">
                                                <label>Gender:</label>
                                                <select className="form-control" value={gender} onChange={event => setGender(event.target.value)} required>
                                                    <option value="">Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                                Close
                                            </button>
                                            <button type="submit" className="btn btn-primary">{editId ? 'Update' : 'Submit'}</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Student;