<!--- Project title and description --->
<h1 align="left">Student Management System</h1>
<p align="left">This is a simple CRUD application for managing student data. It allows you to add, edit, and delete student records using a web-based interface.</p>
<!--- Table of contents --->
<h2>Table of Contents</h2>
<ul>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies">Technologies</a></li>
  <li><a href="#installation">Installation</a></li>
  <li><a href="#configuration">Configuration</a></li>
  <li><a href="#api-routes">API Routes</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#credits">Credits</a></li>
</ul>
<!--- Features --->
<h2>Features</h2>
<ul>
  <li>View a list of all students</li>
  <li>Add a new student record</li>
  <li>Edit an existing student record</li>
  <li>Delete a student record</li>
</ul>
<!--- Technologies --->
<h2>Technologies</h2>
<ul>
  <li><a href="https://nodejs.org/">Node.js</a>: A JavaScript runtime for building server-side applications</li>
  <li><a href="https://expressjs.com/">Express.js</a>: A popular web framework for building Node.js applications</li>
  <li><a href="https://www.mongodb.com/">MongoDB</a>: A NoSQL database for storing and retrieving data</li>
  <li><a href="https://reactjs.org/">React</a>: A JavaScript library for building user interfaces</li>
  <li><a href="https://axios-http.com/">Axios</a>: A JavaScript library for making HTTP requests from the client-side</li>
</ul>
<!--- Installation --->
<h2>Installation</h2>
<ol>
  <li>Clone this repository to your local machine:</li>
  <pre><code>git clone https://github.com/xb3sox/student-management-system.git</code></pre>
  <li>Install the dependencies:</li>
  <pre><code>cd student-management-system<br>npm install</code></pre>
  <li>Start the server:</li>
  <pre><code>npm start</code></pre>
  <li>Open your web browser and go to <code>http://localhost:3000</code> to view the application.</li>
</ol>
<!--- Configuration --->
<h2>Configuration</h2>
<p>This application uses environment variables to configure the MongoDB connection and other settings. To configure these variables, create a file named <code>.env</code> in the root directory of the project, and add the following variables:</p>
<pre><code>PORT=3000
MONGODB_URI=mongodb://localhost:27017/student-management-system</code></pre>
<p>Replace the <code>PORT</code> and <code>MONGODB_URI</code> values with your own values as needed.</p>
<!--- API Routes --->
<h2>API Routes</h2>
<ul>
  <li><code>GET /students</code>: Returns a list of all students</li>
  <li><code>GET /students/:id</code>: Returns a specific student record by ID</li>
  <li><code>POST /students</code>: Adds a new student record</li>
  <li><code>PUT /students/:id</code>: Updates an existing student record by ID</li>
  <li><code>DELETE /students/:id</code>: Deletes a student record by ID</li>
</ul>
<!--- License --->
<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
<!--- Credits --->
<h2>Credits</h2>
<p>This application was created by <em>xb3sox</em>. If you have any questions or feedback, please contact me at <a href="mailto:basem.igi@gmail.com">basem.igi@gmail.com</a>.</p>
