import express from "express"; 
import { getAllBooks, getSingleBookById, updateBook,
    deleteBook, addNewBook
 } from "../controllers/book-controller.js";

// Create express router 
export const router = express.Router();

// all the routes that are related to books only 
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookById); 
router.post("/add", addNewBook); 
router.put("/update/:id", updateBook); 
router.delete("/delete/:id", deleteBook); 