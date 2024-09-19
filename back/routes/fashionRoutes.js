import express, { response } from 'express'
import { getProduct, addProduct, deleteProduct, modifProduct, authcontrollers, login } from '../controllers/fashionControlllers.js'
import { upload } from '../utils/multer.js'




const router = express.Router();

router.post('/signup', authcontrollers);
router.post('/login',login )
  

/*********GET FOODS***********/
router.get('/', getProduct)


/*********ADD FOOD***********/

router.post('/addProduct', upload.single('photo'), addProduct)

/*********DELET FOOD***********/

router.delete('/delete/:index', deleteProduct)

/*********EDIT FOOD***********/

router.put('/modifier/:index', upload.single('photo'), modifProduct)







export default router

