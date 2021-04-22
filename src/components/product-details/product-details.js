import React, { useEffect, useState } from 'react';
import './product-details.css';
import { useParams } from 'react-router';
import { getRequest } from '../../apis/API';

function ProductDetails(props) {

    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = () => {
        getRequest("/products/" + productId).then((data) => {
            console.log('data', data);
            setProduct(data);
        })
    }

    return (
        <div className='m-5'>
            <div className='container p-5 product-container bg-white'>
                <div className='row'>
                    <div className='col-5'>
                        <img src={product?.img} alt={product?.name} width='100%' />
                    </div>
                    <div className='col-7'>
                        <h1>{product?.name}</h1>
                        <p>{product?.subtitle}</p>
                        {
                            product?.bestseller &&
                            <div className='chip'>
                                Best Seller
                            </div>
                        }
                        <div className='d-flex align-items-center'>
                            <span className='mr-2'>Price:</span>
                            <span className='price'>₹{product?.price?.toFixed('2')}</span>
                        </div>
                        <p>{product?.description}</p>
                        {
                            product?.features &&
                            <div className='my-3'>
                                <div className='font-weight-bold'>Specifications:</div>
                                <ul>
                                    {
                                        product?.features?.map((feature, index) => {
                                            return <li key={index}>{feature}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;