import express from "express";
import { getAllBooks, getBookbyID, createBook, updateBook, deleteBook } from "../controller/bookControllers.js"

const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.get("/:id", getBookbyID);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router; // when we import this in server.js, we can call it anything, e.g(bookRoutes)
