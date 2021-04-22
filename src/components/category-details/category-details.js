import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRequest } from '../../apis/API';
import Product from '../product/product';

function CategoryDetails(props) {

    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCategoryDetails();
        getProductsByCategoryId();
    }, [categoryId])

    const getCategoryDetails = () => {
        getRequest("/categories/" + categoryId).then((data) => {
            console.log('data', data);
            setCategory(data);
        })
    }

    const getProductsByCategoryId = () => {
        getRequest("/products/by-category?categoryId=" + categoryId).then((data) => {
            console.log('data', data);
            setProducts(data);
        })
    }

    return (
        <>
            <div className='container category-details text-center my-5'>
                <h1>{category?.name}</h1>
                <p>{category?.description}</p>
            </div>
            <div className='container bestseller-container my-3'>
                <div className='row'>
                    {products.map((product, index) => {
                        return (
                            <div key={index} className='col-12 col-sm-6 col-lg-4 my-3'>
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
                {
                    !products?.length &&
                    <div className='text-center mb-5'>No products are availble for this category.</div>
                }
            </div>
        </>
    );
}

export default CategoryDetails;