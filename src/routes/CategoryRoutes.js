const router = require("express").Router()
const CategoryController = require("../controllers/CategoryController")
router.get("/categories",CategoryController.getAllCategories)
router.post("/addcategory",CategoryController.addCategory)
router.get("/categories/:id",CategoryController.getCategoryById)
router.delete("/categories/:id",CategoryController.deleteCategory)
module.exports = router