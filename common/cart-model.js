import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    size:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
},
    {timestamps:true}
)

const cartModel = mongoose.model( "cart", cartSchema)

export default cartModel