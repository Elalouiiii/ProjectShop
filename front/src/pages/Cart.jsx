import React from 'react'
import { MdBorderLeft, MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { Button, ButtonGroup } from 'react-bootstrap';
import { removeFromCart, addProduct, increment,decrement } from '../store/features/ShopSlice';









export default function Cart({ item }) {

  const dispatch = useDispatch();

  return (




    <div className='d-flex p-5 mx-auto'>
      <table className='table'>
   
        <thead style={{borderCollapse: "collapse",fontSize:'24px',color:'white',backgroundColor:'red'}}>
          <th>Photo</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </thead>
        <tbody>
          <tr>
            <img src={'http://localhost:5555/uploads/' + item.photo} />
           <td style={{fontWeight:'bold'}}>{item.name}</td>
            <td>
              <p >
                <ButtonGroup aria-label="Basic example">
                  <Button variant="light" style={{ border: '1px solid black' }} onClick={() => dispatch(decrement(item))}>-</Button>
                  <Button variant="light" style={{ border: '1px solid black' }}>{item.quantity}</Button>
                  <Button variant="light" style={{ border: '1px solid black' }} onClick={() => dispatch(increment(item))}>+</Button>
                </ButtonGroup>
              </p>
            </td>
            <td style={{fontWeight:'bold'}}>{item.quantity * item.price} $ </td>
            {/* <td> {item.quantity * item.price} $</td> */}
            <td><MdDelete style={{ fontSize: '23px', cursor: 'pointer' }} onClick={() => dispatch(removeFromCart(item))} /></td>
          </tr>

        </tbody>
      </table>
    </div>




  )
}

// <td> <p style={{marginRight:'350px'}}>{item.name}</p></td>
// <td>
//   <p style={{marginRight:'350px'}}>
//   <ButtonGroup aria-label="Basic example">
//     <Button variant="light" style={{ border: '1px solid black' }} onClick={()=>dispatch(decrement(item))}>-</Button>
//     <Button variant="light" style={{ border: '1px solid black' }}>{item.quantity}</Button>
//     <Button variant="light" style={{ border: '1px solid black' }} onClick={()=>dispatch(addProduct(item))}>+</Button>
//   </ButtonGroup>
//   </p>
// </td>
// <td> {item.quantity*item.price} $</td>
// <td><MdDelete style={{ fontSize: '23px', cursor: 'pointer' }} onClick={()=>dispatch(removeFromCart(item))} /></td>






























































