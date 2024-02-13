import priceModel from "../../common/price-model.js";

export const addPrice = async (req,res)=>{
    try{
        const newPrice = await priceModel.create(req.body)
        res.status(200).json(newPrice)
    }catch(error){
        res.status(500).json({ error:"failed to add price"})
    }
};

export const getAllprices = async (req,res)=>{
    try{
        const allPrices = await priceModel.find()
        res.status(200).json(allPrices)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const getPricebyId = async (req,res)=>{
    try{
        const price = await priceModel.findById(req.params.id)
        res.status(200).json(price)
    }catch(error){
        res.status(500).json({ error:"not found"})
    }
};

export const updatePricebyId = async (req,res)=>{
    try{
        const updatePrice = await priceModel.findByIdAndUpdate( req.params.id, req.body, {new:true})
        res.status(200).json(updatePrice)
    }catch(error){
        res.status(500).json({ error:"failed to update price"})
    }
};

export const deletePricebyId = async (req,res)=>{
    try{
        const deleteprice = await priceModel.findByIdAndDelete( req.params.id)
        res.status(200).json(deleteprice)
    }catch(error){
        res.status(500).json({ error:"failed to delete price"})
    }
};

