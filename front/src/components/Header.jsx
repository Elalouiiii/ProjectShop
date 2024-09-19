import React from 'react'
import shopicon from '../images/shopicon.jpg';
import logo from '../images/logoimg.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




export default function Header() {
    const cart = useSelector((state) => state.pannier.shopPannier)

    //  const dispatch = useDispatch():

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

                    <span className='navbar-text'>
                        <Link to='/oneCart' >
                            <img src={shopicon} alt="" />

                        </Link>
                        <span className='badge rounded-pill bg-dange'> {cart.length}  </span>

                    </span>

                </div>
            </div>
        </div>
    )
}

