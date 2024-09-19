
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home'
import Administration from './components/Administration'
import Signup from './pages/Signup';
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OneCart from './components/OneCart';
import ProductsDetails from './pages/ProductDetails'
import AboutAs from './pages/AboutAs'

function App() {


  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutAs />} />
          <Route path='/administration' element={<Administration />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/oneCart' element={<OneCart />} />
          <Route path='/productDetails/:id' element={<ProductsDetails />} />
          
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App


































