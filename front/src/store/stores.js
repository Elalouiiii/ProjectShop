import {configureStore} from '@reduxjs/toolkit'
import  shopPannier  from './features/ShopSlice'
import shopReducer from './featureadd/shopSliceadd'

export default configureStore({
  reducer: {
    pannier:shopPannier,
    article:shopReducer,
    
  },
})
 




