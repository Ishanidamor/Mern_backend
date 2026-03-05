const bookSchema = require("../models/BookModel")

const addBook = async (req,res)=>{

    const newBook = await bookSchema.create(req.body);     
    res.json({
        message:"Your book is created",
        data:newBook
    })
}   

const getAllBooks = async(req,res)=>{

    const allBooks = await bookSchema.find()
    res.json({
        message:"all books",
        data:allBooks
    })
}

const getBookById = async(req,res)=>{
    const  foundBook = await bookSchema.findById(req.params.id)
    if(foundBook){
    res.json({
        message:"Your book is founded",
        data:foundBook
    })      
    }else{
        res.json({
            message:"Book not founded"
        })
    }
}

const deleteBook = async (req,res)=>{
    const removeBook = await bookSchema.findByIdAndDelete(req.params.id)
    if(removeBook){
    res.status(200).json({
        message:"Your book is deleted",
        data:removeBook
    })
    }else{
        res.status(404).json({
            message:"Book not found"
        })
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById,
    deleteBook
}