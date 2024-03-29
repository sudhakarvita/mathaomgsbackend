import thicknessModel from "../../common/thickness-model.js";

export const addThickness = async (req,res)=>{
    try{
        const thickness = await thicknessModel(req.body)
        thickness.save()
        res.status(200).json(thickness)
    }catch(error){
        res.status(500).json({ error:"failed to create thickness"})
    }
};

export const getAllthicknesses = async (req,res)=>{
    try{
        const allthicknesses = await thicknessModel.find()
        res.status(200).json(allthicknesses)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const getThicknessbyId = async (req,res)=>{
    try{
        const thickness = await thicknessModel.findById(req.params.id)
        res.status(200).json(thickness)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const updateThicknessbyId = async (req,res)=>{
    try{
        const updatethickness = await thicknessModel.findByIdAndUpdate( req.params.id, req.body, {new:true})
        res.status(200).json(updatethickness)
    }catch(error){
        res.status(500).json({ error:"failed to update thickness"})
    }
};

export const deleteThicknessbyId = async (req,res)=>{
    try{
        const deletethickness = await thicknessModel.findByIdAndDelete( req.params.id)
        res.status(200).json(deletethickness)
    }catch(error){
        res.status(500).json({ error:"failed to delete thickness"})
    }
};

