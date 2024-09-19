import React from 'react';
import logo from '../images/logoimg.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FemmProdList from './mainAddProd/FemmProdList';
import Footer from './Footer'



export default function Administration() {
  return (
    <div>

      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="" />
          <h2>E-SHOPPER</h2>
        </div>
        <ul className='nav-menu'>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/about'>About as</Link></li>
          <li><Link className='link' to='/administration' >Administration</Link></li>



        </ul>
        <div className='nav-login-cart'>
          <Link to='/signup'>
            <Button variant="warning"> <span>Create Accout</span>  </Button>

          </Link>
          <Link to="/login">
            <Button variant="info">Log In </Button>

          </Link>


        </div>
      </div>
      <h1 style={{ textAlign: 'center', color: 'gold', marginTop: '5%' }}> --- Boutique Fashion --- </h1>


      <div className='mainAddProd'>
        <FemmProdList />
        {/* <AddFemmeProd /> */}

      </div>


<Footer />

    </div>
  )
}
