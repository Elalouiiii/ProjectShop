import { createSlice } from '@reduxjs/toolkit'
import {  toast } from 'react-toastify';



export const shopSlice = createSlice({
  name: 'pannier',
  initialState: {
    shopPannier: [],
  },
  reducers: {
    addProduct: (state,action) => {
      const prodIndex = state.shopPannier.findIndex((item) => item.id == action.payload.id);
      const data = action.payload;
      if (prodIndex == -1) {
        state.shopPannier.push({ ...data, quantity: 1 })
        toast.success("Product Add!");
      } 
      
     
    },
    increment: (state, action) => {
      const prodIndex = state.shopPannier.findIndex((item) => item.id == action.payload.id);
      const data = action.payload;
      let quantity = Number(state.shopPannier[prodIndex].quantity)
      state.shopPannier[prodIndex] = { ...data, quantity: quantity + 1 }
       toast.info("Product Increment");

    },
    decrement: (state, action) => {
      const prodIndex = state.shopPannier.findIndex((item) => item.id == action.payload.id);
      const data = action.payload;
      if (data.quantity > 1) {
        let quantity = Number(state.shopPannier[prodIndex].quantity)
        state.shopPannier[prodIndex] = { ...data, quantity: quantity - 1 }
        toast.info("Product decrement");

      } else {
        state.shopPannier = state.shopPannier.filter((item) => item.id !== action.payload.id)
       
        

      }


    },
    removeFromCart: (state, action) => {
      state.shopPannier = state.shopPannier.filter((item) => item.id !== action.payload.id)
      toast.warning("Product deleted")
     
    },
    clairAllCart: (state, action) => {
      state.shopPannier = [];
      toast.error("All Product Deleted ! ! !")
    }
  },

  
})
export const { addProduct,increment, decrement, removeFromCart, clairAllCart } = shopSlice.actions
export default shopSlice.reducer; 
