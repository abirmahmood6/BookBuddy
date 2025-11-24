import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRoutes from "./routes/bookRoutes.js";
import cors from "cors";
//BookBuddy
// Continue vdo- 20min

dotenv.config(); // dotenv.config let us use global variables from .env (by process.env.__)
const app = express(); //initializing express app
const PORT = process.env.PORT;
const mongoDB_uri = process.env.MONGO_URI;

//middleware for accepting user data in json format
app.use(express.json());

// middleware for handling CORS policy. CORS is a browser security rule that decides whether one website is allowed to request data from another website
app.use(cors()) // allow all origins with default of cors(*)
app.use(cors({ // allow custom origins
  origin: "http://localhost:5173/", //provide the path from frontend
}))

app.use("/", noteRoutes);

//server connecting to database (!! separate this to a DB.js)
mongoose
  .connect(mongoDB_uri)
  .then(() => {
    console.log("MongoDB Connected Succesfully");
    app.listen(PORT, () => console.log("Server running on PORT: ", PORT));
  })
  .catch((error) => {
    console.log(error);
    process.exit(1); //stops the Node.js process immediately. 0 → success, 1 → failure/error
  });
