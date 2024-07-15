import express from "express";
import path from "path";
import {fileURLToPath} from 'url';
import posts from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorhandler from "./middleware/error.js";
import notfound from "./middleware/notfound.js";
// get the direcctory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:false}))

// logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname,'public')))


app.use('/api/posts',posts)


// not found middleware
app.use(notfound);
// error middleware
app.use(errorhandler);
app.listen(8080,()=>console.log("server is running on port 8080"));