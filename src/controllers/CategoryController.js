const categorySchema = require("../models/CategoryModel")

const addCategory = async (req,res)=>{

    const newCategory = await categorySchema.create(req.body);     
    res.json({
        message:"Your category is created",
        data:newCategory    
    })
}   

const getAllCategories = async(req,res)=>{

    const allCategories = await categorySchema.find()
    res.json({
        message:"all categories",
        data:allCategories
    })
}

const getCategoryById = async(req,res)=>{
    const  foundCategory = await categorySchema.findById(req.params.id)
    if(foundCategory){
    res.json({
        message:"Your category is founded",
        data:foundCategory
    })      
    }else{
        res.json({
            message:"Category not founded"
        })
    }
}

const deleteCategory = async (req,res)=>{
    const removeCategory = await categorySchema.findByIdAndDelete(req.params.id)
    if(removeCategory){
    res.status(200).json({
        message:"Your category is deleted",
        data:removeCategory
    })
    }else{
        res.status(404).json({
            message:"Category not found"
        })
    }
}

module.exports = {
    addCategory,
    getAllCategories,
    getCategoryById,
    deleteCategory
}