import { configDotenv } from "dotenv";
import express from "express"; 
import { connectToDB } from "./database/db.js";
import { router } from "./routes/book-routes.js";


// Load environment variables from .env file
configDotenv(); 

const app = express(); 

const PORT = process.env.PORT || 3000; 

// Connect to our database 
connectToDB(); 

// middleware -> expresss.json
app.use(express.json()); 

// routes.here 
//const bookRoutes = router; 
app.use("/api/books", router); 

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
});

