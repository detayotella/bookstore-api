import mongoose from "mongoose";
const { Schema, model } = mongoose; 

const BookSchema = new Schema({
    title : {
        type: String, 
        required: [true, "Book title is required"], 
        trim: true, 
        maxLength: [100, "Book title can not be more than 100 characters"]
    }, 
    author: {
        type: String, 
        required: [true, "Author name is required"], 
        trim: true, 
    }, 
    year: {
        type: Number, 
        required: [true, "Publication year is required"],
        min: [1000, "Year must be at least 1000"], 
        max: [new Date().getFullYear(), "Year cannot be in the future"]
    }, 
    createdAt: {
        type: Date, 
        default: Date.now, 
    }
}); 

export const Book = model("Book", BookSchema) 