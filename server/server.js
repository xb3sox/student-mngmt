// student management system

// project structure tree (server side)
// server
//  - server.js
//  - config
//      - db.js
//  - controllers
//      - studentController.js
//  - models
//      - student.js
//  - routes
//      - studentRoutes.js


import express from 'express'; // import express 
import bodyParser from 'body-parser'; // import body-parser 
import studentRoutes from './routes/studentRoutes.js'; // import studentRoutes
import dotenv from 'dotenv'; // import dotenv
import db from './config/db.js'; // import db
import cors from 'cors'; // import cors



dotenv.config(); // load environment variables
const app = express(); // create express app

app.use(cors()); // enable cors
app.use(bodyParser.json()); // parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

// routes for student management
app.use('/', studentRoutes);

// define a simple route
app.get('/', (req, res) => {
    // simple html page
    res.send(`
        <h1>Student Management System</h1>
        <p>Student Management System is a simple CRUD application built with Node.js, Express.js, and MongoDB.</p>
        <p>For more information, please visit <a href="#">here</a>.</p>
    `);
});

// set port
const port = process.env.PORT || 3000;

// listen for requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
