import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Cart from '../pages/Cart';
import logo from '../images/logoimg.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { clairAllCart } from '../store/features/ShopSlice'
// import data from '../store/featureadd/shopSliceadd'
import Footer from './Footer'


export default function OneCart() {
    const dispatch = useDispatch();
 
    const cart = useSelector((state) => state.pannier.shopPannier)

    let total = 0
    {
        cart.map((item) => (
            total = total + (item.price + item.quantity)
        ))
    }
    useEffect(() => {
        localStorage.setItem('tabCart', JSON.stringify(cart))
    }, [cart])
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

            </div>

            <div>


            </div>
            <div className=''>
                {
                    cart.length > 0 ? cart.map((item, index) => (
                        <Cart key={index} item={item} />

                    ))
                        :
                        <p style={{ textAlign: 'center', fontSize: '25px', marginTop: '8%' }}><h1>Liste Produits est vide!!!</h1></p>
                }

            </div>
            <div className='clear mt-4'>
                <Button variant="danger" onClick={() => dispatch(clairAllCart())}> Clear </Button>

                <h5>Totale :  <span> {total} DT</span> </h5>

            </div>
            <Footer />
        </div>
    )
}
