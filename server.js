import express from "express";
import path from "path";
import posts from "./routes/posts.js"
import logger from "./middleware/logger.js"
import errorhandler from "./middleware/error.js";
import notfound from "./middleware/notfound.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

// logger middleware
app.use(logger);


app.use('/api/posts',posts)


// not found middleware
app.use(notfound);
// error middleware
app.use(errorhandler);
app.listen(8080,()=>console.log("server is running on port 8080"));