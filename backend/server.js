import express from "express";
import dotenv from "dotenv" 
import mongoose from "mongoose";
import noteRoutes from "./routes/bookRoutes.js"

//BookBuddy
// Continue vdo- 20min

dotenv.config(); // dotenv.config let us use global variables from .env (by process.env.__)
const app = express () //initializing express app
const PORT = process.env.PORT 
const mongoDB_uri = process.env.MONGO_URI

//middleware 
app.use(express.json()) //accept user data in json format

app.use("/", noteRoutes);

//server connecting to database (!! separate this to a DB.js)
mongoose.connect(mongoDB_uri)
.then(() => {
    console.log("MongoDB Connected Succesfully")
    app.listen(PORT, () =>
    console.log("Server running on PORT: ", PORT)
)
}).catch((error) => {
    console.log(error)
    process.exit(1) //stops the Node.js process immediately. 0 → success, 1 → failure/error
})


