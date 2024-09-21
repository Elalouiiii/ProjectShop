import express, { response } from 'express'
import { getProduct, addProduct, deleteProduct, modifProduct, authcontrollers, login,detailsProduct } from '../controllers/fashionControlllers.js'
import { upload } from '../utils/multer.js'




const router = express.Router();

router.post('/signup', authcontrollers);
router.post('/login',login )
  

/*********GET Produit***********/
router.get('/', getProduct)


/*********ADD Produit***********/

router.post('/addProduct', upload.single('photo'), addProduct)

/*********DELET Produit***********/

router.delete('/delete/:index', deleteProduct)

/*********EDIT Produit***********/

router.put('/modifier/:index', upload.single('photo'), modifProduct)


router.get('/product/:id', detailsProduct)
   


export default router

