const stateSchema = require("../models/StateModel")

const addState = async (req,res)=>{

    const newState = await stateSchema.create(req.body);     
    res.json({
        message:"Your state is created",
        data:newState   
    })
}   

const getAllStates = async(req,res)=>{

    const allStates = await stateSchema.find()
    res.json({
        message:"all states",
        data:allStates
    })
}

const getStateById = async(req,res)=>{
    const  foundState = await stateSchema.findById(req.params.id)
    if(foundState){
    res.json({
        message:"Your state is founded",
        data:foundState
    })      
    }else{
        res.json({
            message:"State not founded"
        })
    }
}

const deleteState = async (req,res)=>{
    const removeState = await stateSchema.findByIdAndDelete(req.params.id)
    if(removeState){
    res.status(200).json({
        message:"Your state is deleted",
        data:removeState
    })
    }else{
        res.status(404).json({
            message:"State not found"
        })
    }
}

module.exports = {
    addState,
    getAllStates,
    getStateById,
    deleteState
}   