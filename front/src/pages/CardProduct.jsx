import React from 'react'
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { addProduct } from '../store/features/ShopSlice'
import { useDispatch } from 'react-redux';
import { TiEye } from "react-icons/ti";
import { Link } from 'react-router-dom';



export default function CardProduct({ item }) {
  // const {id,name,image,price,contenu} = item;
  const dispatch = useDispatch();
  return (
    // <div>

    <Card className='card'>

      <Card.Img variant="top" style={{ widows: '250px', height: '250px' }} src={item.image} />
      <Card.Body>
        <Card.Title>
          <h4 style={{ textAlign: 'center' }}>{item.name}</h4>
        </Card.Title>
        <Card.Text>
          <p>  {item.contenu.substring(1, 40)}  </p>

        </Card.Text>
        <p className='price'> {item.price} $ </p>

      </Card.Body>
      <p className='star'>
        <FaStar /> <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
      </p>

      <div className='addproduct'>
        <div className='iconCard'>
        
         <FaCartPlus style={{ fontSize: '32px', margin: '22px' }} onClick={() => dispatch(addProduct(item))} />
        
         
           <Link to={`/details/${id}`}> 

          <TiEye style={{ fontSize: '32px', margin: '22px', background: 'black' }}   />

           </Link> 
          <FaHeart style={{ fontSize: '32px', margin: '22px', }} />
        </div>

      </div>




    </Card>
    // </div>
  )
}
