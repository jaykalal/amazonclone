import React from 'react';
import './product.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Product({ product }) {
    return (
        <Card className='product py-2 px-3' >
            <div className='chip-container'>
                {
                    product?.bestseller &&
                    <div className='chip'>
                        Best Seller
                </div>
                }
            </div>
            <img src={product?.img} alt={product?.name} />
            <div className='text-center p-2'>
                <Link to={`/products/${product?.id}`}>
                    <h4>{product?.name}</h4>
                </Link>
                <div>{product?.subtitle}</div>
                <div className='price'>₹{product?.price?.toFixed('2')}</div>
            </div>
        </Card>
    );
}

export default Product;