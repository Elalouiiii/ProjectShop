import Fashion from "../models/fashionModels.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import User from '../models/userModels.js'
import jwt from 'jsonwebtoken'
import Vipprod from "../models/fashionModels.js";


const authcontrollers = (req, res) => {
    const { name, email, password } = req.body;
    bcrypt.hash(password, 10)
        //
        .then(hash => {
            User.create({ name, email, password: hash })
                .then(user => res.json("success"))
                .catch(err => res.json(err))
        }).catch(err => console.log(err.message));


}

const login = async (req, res) => {

    const { email, password } = req.body;

    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({ email: user.email, role: user.role }, "jwk-scret-key", { expiresIn: "1d" })
                        res.cookie("token", token)
                       return res.json({Status:"success",role:user.role})
                    } else {
                        res.json('the password is incorrect')
                    }

                })
            } else {
                res.json("No record Existed")
            }

        })
    }










const getProduct = async (req, res) => {
    
    const Fashions = await Fashion.find();
    res.json(Fashions)


}
const addProduct = async (req, res) => {


    const Fashions = await Fashion.create({
        ...req.body,
        photo: req.file.filename

    })

    res.json(Fashions)
}





const deleteProduct = async (req, res) => {
    console.log(req.params.index);

 const  fashions = await Fashion.findByIdAndDelete(req.params.index)

    res.json(fashions)

}

const modifProduct = async (req, res) => {
    console.log(req.params.index);
    let data
    if (req.file) {
        console.log(req.file);
        const photo = req.file.filename
        data = { ...req.body, photo }
    } else {
        data = req.body
    }





   const fashion = await Fashion.findByIdAndUpdate(req.params.index, data, { new: true })
    res.json(fashion)
    // res.redirect('/')
}



const getProductVip = async (req, res) => {
    
    const fashionsVip = await Vipprod.find()
    res.json(fashionsVip)


}
const addProductVip = async (req, res) => {


    const fashionsVip = await Vipprod.create({
        ...req.body,
        photo: req.file.filename

    })

    res.json(fashionsVip)
}





const deleteProductVip = async (req, res) => {
    console.log(req.params.index);

 const  fashionsVip = await Vipprod.findByIdAndDelete(req.params.index)

    res.json(fashionsVip)

}

const modifProductVip = async (req, res) => {
    console.log(req.params.index);
    let data
    if (req.file) {
        console.log(req.file);
        const photo = req.file.filename
        data = { ...req.body, photo }
    } else {
        data = req.body
    }





   const fashionsVip = await Vipprod.findByIdAndUpdate(req.params.index, data, { new: true })
    res.json(fashionsVip)
    // res.redirect('/')
}

export { getProduct, addProduct, deleteProduct, modifProduct, authcontrollers, login,getProductVip,addProductVip,deleteProductVip,modifProductVip }
// ,,addProduct, , modifProduct 
