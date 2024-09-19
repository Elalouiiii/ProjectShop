import mongoose from "mongoose";



const connectionDB=async()=>{
    const url='mongodb+srv://abdelaziz:0000@3wacademy.y33zpwn.mongodb.net/ShopFashion';
    await mongoose.connect(url);
    console.log('You Are Connected to dataBase Fashion Project');
}

export default connectionDB