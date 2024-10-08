import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import { getProduct, data } from '../store/featureadd/shopSliceadd';
import { useDispatch, useSelector } from 'react-redux';

import axios from 'axios';

export default function ProductDetails() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(data));
    }, [dispatch]);


    const Articles = useSelector(data)

    const { id } = useParams();
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`http://localhost:5555/product/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) { setError(error.message); }
        };
        fetchProduct();
    }, [id]);




    return (
        <div>
            <Header />
            <div className="container py-5">
                <div className='row py-4'>
                    <div className='col-md-6'>
                        <img src={`http://localhost:5555/uploads/${product.photo}`} alt={product.name} height="400px" width="400px" />

                    </div>
                    <div className='col-md-6'>
                        <h4 className='text-uppercase text-blac-50'>
                            {product.category}
                        </h4>

                        <p>
                            <h1 className='display-5'>{product.name}</h1>
                            <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i> <i className='fa fa-star text-warning'></i>
                        </p>

                        <span className='display-4 fw-bold my-2'>Last Price  : {product.price} $</span>
                       
                         <p className='lead'>{product.discription}</p> 
                        <button className='btn btn-outline-dark px-4 py-2'>Add to Cart </button>

                    </div>
                </div>
            </div>
        </div>
    )
}
