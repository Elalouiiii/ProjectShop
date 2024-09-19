import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';



/***1 get***/
export const getProduct = createAsyncThunk(
  'article/getProduct',
  async () => {
    const response = await axios.get('http://localhost:5555')
    console.log(response.data);

    return response.data
  }
)



/***2 (add)***/
export const addProducts = createAsyncThunk(
  'article/addProducts',
  async (data) => {
    try {
      const response = await axios.post('http://localhost:5555/addProduct', data)
      console.log(response.data);

      return response.data
    } catch (error) {
      console.log(error);
    }

  }
)
// `http://localhost:5555/delete/${id}`
/***3 (delete)***/
export const deleteProduct = createAsyncThunk(
  'article/deleteProduct',
  async (id) => {                
    const response = await axios.delete(`http://localhost:5555/delete/${id}`)
    console.log(response.data._id);
    return response.data
  }
)





/**2eme edit */
export const updateProducts = createAsyncThunk(
  'article/updateProducts',
  async (article) => {
    console.log(article);
    const response = await axios.put('http://localhost:5555/modifier/' + article.id, article.formData);
    console.log(article);
    return response.data

  })




const initialState = {

  articleListe: [],

}






export const shopSliceadd = createSlice({



  name: 'article',
  initialState,
  reducers: {},


  extraReducers: (builder) => {

    //get
    builder.addCase(getProduct.pending, (state, action) => {

    })

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.articleListe = action.payload


    })
    builder.addCase(getProduct.rejected, (state, action) => {
      state.articleListe = action.payload;
    })


    // //add
    builder.addCase(addProducts.pending, (state, action) => {

    })

    builder.addCase(addProducts.fulfilled, (state, action) => {
      state.articleListe.push(action.payload);
      


    })

    builder.addCase(addProducts.rejected, (state, action) => {
      console.log('test');
    })

    //delet

    builder.addCase(deleteProduct.pending, (state, action) => {

    })

    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.articleListe = state.articleListe.filter((item) => item._id !== action.payload)
    })

    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.articleListe = action.payload;
    })

    //Modification

    builder.addCase(updateProducts.pending, (state, action) => {


    })

    builder.addCase(updateProducts.fulfilled, (state, action) => {

      const itemFind = state.articleListe.findIndex((item) => item._id == action.payload._id)
      state.articleListe[itemFind] = action.payload

    })

    builder.addCase(updateProducts.rejected, (state, action) => {

    })


  }
}
)

export const data = (state) => state.article.articleListe;
export default shopSliceadd.reducer