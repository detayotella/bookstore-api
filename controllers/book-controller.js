import { Book } from "../models/books.js";

export const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find({}); 
        if (allBooks?.length > 0) {
            res.status(200).json({
                success: true, 
                message: "List of books fetched successfully", 
                data: allBooks
            })
        } else {
            res.status(404).json({
                success: false, 
                message: "No books found in collection"
            });
        }
    } catch(e) {
        console.log(e); 
        res.status(500).json({
          success: false, 
          message: "Something went wrong! Please try again"  
        });

    }
    
};

export const getSingleBookById = async (req, res) => {
    try {
        const getCurrentBookID = req.params.id; 
        const bookDetailsByID = await Book.findById(getCurrentBookID); 

        if (!bookDetailsByID) {
            return res.status(404).json({
                success: false, 
                message: "Book with the current ID is not found! Please try with a different ID"
            }) 
        }

        res.status(200).json({
            success: true, 
            data: bookDetailsByID
        })
    } catch(e) {
        console.log(e); 
        res.status(500).json({
          success: false, 
          message: "Something went wrong! Please try again"  
        });
    }

}

export const addNewBook = async (req, res) => {
    try {
        const newBookFromData = req.body; 
        const newlyCreatedBook = await Book.create(newBookFromData); 
        
        if (newBookFromData) {
            res.status(201).json({
                success: true, 
                messsage: "Book added successfully", 
                data: newlyCreatedBook
            }); 
        }
    } catch(e) {
        console.log(e); 
        res.status(500).json({
          success: false, 
          message: "Something went wrong! Please try again"  
        });
    }
}

export const updateBook = async (req, res) => {
    try {
        const updatedBookFromData = req.body; 
        const getCurrentBookID = req.params.id; 
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookID, updatedBookFromData, {
            new: true
        }); 

        if (!updatedBook) {
            res.status(404).json({
                success: false, 
                message: "Book is not found with this ID"
            })
        }
        
        res.status(200).json({
            success: true, 
            message: "Book updated successfully", 
            data: updatedBook
        })
    } catch(e) {
        console.log(e); 
        res.status(500).json({
            success: false, 
            messsage: "Something went wrong! Please try again",
        })
    } 

}

export const deleteBook = async (req, res) => {
    try {
        const getCurrentBookID = req.params.id; 
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookID); 

        if (!deletedBook) {
            res.status(404).json({
                success: false, 
                message: "Book is not found with this ID"
            })
        }

        res.status(200).json({
            success: true, 
            data: deletedBook
        })
    } catch(e) {
        console.log(e); 
        res.status(500).json({
          success: false, 
          message: "Something went wrong! Please try again"  
        });
    }

}
