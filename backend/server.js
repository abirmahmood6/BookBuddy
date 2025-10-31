import express from "express";
import dotenv from "dotenv" 

dotenv.config(); // dotenv.config let us use global variables from .env (by process.env.__)
const app = express () //initializing express app
const PORT = process.env.PORT 



//our first route
app.get("/",(req,res) => {
    return res.status(200).send("New Book Added") // 200(created)

})

app.listen(PORT, () =>
    console.log("Server running on PORT: ", PORT)
)