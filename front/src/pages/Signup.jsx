import React from 'react'
import logo from '../images/logoimg.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { Button } from 'react-bootstrap';
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Signup() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  const handlSbmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/api/auth/signup', { name, email, password })
      .then(res => {
        // alert("ok")
       navigate('/login')
      }).catch(err => console.log(err))
  }
  return (
    <div style={{ backgroundColor: 'rgb(32, 139, 162)' }}>
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
        <div className='all'>
          <div className='creatcompt'>
            <h2>Creation Compte</h2>

            <form onSubmit={handlSbmit}>
              <div className='allinput'>
                <FaUserLarge className='iconCreatCompt' />
                <input type="text" name="name" id="" placeholder='UserName' onChange={(e) => setName(e.target.value)} />
              </div>

              <div className='allinput'>
                < MdEmail className='iconCreatCompt' />
                <input type="email" name="email" id="" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='allinput'>
                <RiLockPasswordFill className='iconCreatCompt' />
                <input type="password" name="password" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

              </div>


              <div className='submitinfomation'>
                <button type="submit" className='btnsignup'>Registre</button>
              </div>
            </form>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
