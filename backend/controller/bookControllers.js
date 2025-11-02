import { Book } from "../models/bookModel.js"

export async function getAllBooks(req,res) {
     try {
        const book = await Book.find() //await - it waits until MongoDB sends back all the books
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})        
    }
}

export async function createBook(req,res) {
    try {
        if(
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            res.status(400).send("Please enter all the fields that are required to create a book.")
        } 
        const{title, author, publishYear} = req.body;
        const book = new Book({title, author, publishYear});
        // save book to database
        const savedBook =  await book.save(); // WAIT(await) until saves the book in our database and proceed
        res.status(201).send(savedBook)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
}

export async function getBookbyID(req,res) {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).send(book)
        if(!book) {return res.status(404).send("Book not found!")}
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}

export async function updateBook(req, res) {
    try {
        const {title, author, publishYear} = req.body
        const book = await Book.findByIdAndUpdate(
            req.params.id, 
            {title, author, publishYear}, // tells which fields we want to update
            {new: true} // tells Mongoose to return the updated document, not the old one.
        )
        if(!book) {return res.status(404).send("Book not found!")}
        res.status(200).send(book)
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}

export async function deleteBook(req,res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book) {return res.status(404).send("Book not found!")}
        res.status(200).send("The book is successfully deleted")
    } catch (error) {
        console.log(error.message)
        res.status(500).send({message: error.message})
    }
}

