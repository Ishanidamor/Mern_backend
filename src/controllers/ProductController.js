const productSchema = require("../models/ProductModel")

const getAllProducts = async(req,res)=>{

    const allProducts = await productSchema.find()
    res.json({
        message:"all products",
        data:allProducts
    })

}
 const getProductById = async(req,res)=>{

    const foundproduct = await productSchema.findById(req.params.id)
    if(foundproduct){
    res.json({
        message:"Your Product is founded",
        data:foundproduct
    })      
    }else{
        res.json({
            message:"Product not founded"
        })
    }
}

const addProduct = async (req,res)=>{

    const newproduct = await productSchema.create(req.body);
    res.json({
        message:"Your producted is created",
        data:newproduct
    })
}

const deleteProduct = async (req,res)=>{
 
    const removeproduct = await productSchema.findByIdAndDelete(req.params.id)
    if(removeproduct){
    res.status(200).json({
        message:"Your product is deleted",
        data:removeproduct

    })
}else{
    res.status(200),json({
        message:"Product is not available"
    })
}
}
module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProduct
}