const citySchema = require("../models/CityModel")

const addCity = async (req,res)=>{

    const newCity = await citySchema.create(req.body);     
    res.json({
        message:"Your city is created",
        data:newCity
    })
}   

const getAllCities = async(req,res)=>{

    const allCities = await citySchema.find()
    res.json({
        message:"all cities",
        data:allCities
    })
}

const getCityById = async(req,res)=>{
    const  foundCity = await citySchema.findById(req.params.id)
    if(foundCity){
    res.json({
        message:"Your city is founded",
        data:foundCity
    })      
    }else{
        res.json({
            message:"City not founded"
        })
    }
}

const deleteCity = async (req,res)=>{
    const removeCity = await citySchema.findByIdAndDelete(req.params.id)
    if(removeCity){
    res.status(200).json({
        message:"Your city is deleted",
        data:removeCity
    })
    }else{
        res.status(404).json({
            message:"City not found"
        })
    }
}

module.exports = {
    addCity,
    getAllCities,
    getCityById,
    deleteCity
}