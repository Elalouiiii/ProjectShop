import React from 'react'
import logo from '../images/logoimg.jpg'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  // axios.defaults.withCredentials=true;

  const handlSbmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5555/api/auth/login', { email, password })
      .then(res => {
        if (res.data.Status === "success") {
          if (res.data.role === "admin") {
            navigate('/administration')
          }else{
            navigate('/')
          }
        }
       
      }).catch(err => console.log(err))
  }
  return (
    <div style={{ background: 'rgb(32, 139, 162)' }}>
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

        </div>
      </div>
      <div className='login'>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handlSbmit}>
          <div className='inputone'>
            <MdEmail style={{ fontSize: '37px', marginLeft: '12px' }} />

            <input type="email" name="email" id="" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='inputone'>
            <RiLockPasswordFill style={{ fontSize: '37px', marginLeft: '12px' }} />
            <input type="password" name="password" id="" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='sumbit'>
            <input type="submit" value="Connecte" />
          </div>
        </form>
      </div>


      <Footer />

      <div>
      </div>
    </div>
  )
}
