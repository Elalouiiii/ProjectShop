import mongoose from "mongoose";


const fashionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    discription:{
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
  
    photo: {
        type: String,
        required: true,
    },
    
});

const Fashion = mongoose.model('shop', fashionSchema)
export default Fashion; 