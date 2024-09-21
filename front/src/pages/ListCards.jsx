import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, data } from '../store/featureadd/shopSliceadd';
import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { addProduct } from '../store/features/ShopSlice'
import { TiEye } from "react-icons/ti";




export default function ListCards() {



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(data));
    }, [dispatch]);


    const Articles = useSelector(data)
   
    const [recherche, setRecherche] = useState('')
    let filtrProd = Articles.filter((product) =>
        product.name.toLowerCase().includes(recherche.toLowerCase())
    )

    return (
        <div>
            <h3> --  All Products  --</h3>

            <div className="recherInput">
                <InputGroup>
                    <Form.Control
                        placeholder="Enter Name Product!!"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={(e) => setRecherche(e.target.value)}
                        value={recherche}
                        style={{ margin: '10px' }}
                    />
                    <Button style={{ background: 'bleu', margin: '10px' }} id="">
                        Button
                    </Button>
                </InputGroup>
            </div>


            <Container className='listcard'>

                {filtrProd.map((item) => {

                    return (
                        <>

                            <Card className='card'>

                                <Card.Img
                                    style={{ width: '100%', height: '100%' }}
                                    variant="top"
                                    // src={testimg}
                                    src={'http://localhost:5555/uploads/' + item.photo}

                                />
                                {/* <Card.Img variant="top" style={{ widows: '250px', height: '250px' }} src={item.photo} /> */}
                                <Card.Body>
                                    <Card.Title>
                                        <h4 style={{ textAlign: 'center' }}>{item.name}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {/* <p>  {item.contenu.substring(1, 40)}  </p> */}
                                        <p style={{textAlign:'center'}}>{item.category}</p>
                                        <span>
                                        {item.description}
                                        </span>
                                        <p>{item.discription.substring(0,45)}</p>
                                    </Card.Text>
                                    <p className='price' style={{fontWeight:'bold',textAlign:'center'}}> {item.price} $ </p>
                                    {item.description} 
                                </Card.Body>
                                <p className='star'>
                                    <FaStar /> <FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                                </p>

                                <div className='addproduct'>
                                    <div className='iconCard'>

                                        <FaCartPlus style={{ fontSize: '32px', margin: '22px' }} onClick={() => dispatch(addProduct(item))} />

                                        <a href={`/productDetails/${item._id}`}>
                                            <TiEye style={{ fontSize: '32px', margin: '22px', background: 'black' }} />
                                        </a>
                                        {/* <Link to={`/details/${item.id}`}><h1>add hir</h1></Link> */}




                                        <FaHeart style={{ fontSize: '32px', margin: '22px', }} />
                                    </div>

                                </div>




                            </Card>
                        </>
                    )
                })}







            </Container>

        </div>
    )
}


