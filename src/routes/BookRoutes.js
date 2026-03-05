const router = require("express").Router()
const bookController = require("../controllers/BookController")
router.get("/books",bookController.getAllBooks)
router.post("/addbook",bookController.addBook)
router.get("/books/:id",bookController.getBookById)
router.delete("/books/:id",bookController.deleteBook)
module.exports = router