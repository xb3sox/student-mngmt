// config/db.js

import mongoose from 'mongoose'; // import mongoose using import
import dotenv from 'dotenv'; // import dotenv using import

dotenv.config(); // load environment variables

// connect to database
mongoose
    .connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Connected to database") })
    .catch((err) => { console.log(err) });

// export mongoose
export default mongoose;
