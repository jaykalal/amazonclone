import React, { useEffect, useState } from 'react';
import './home.css';
import { Card, Carousel } from 'react-bootstrap';
import { getRequest } from '../../apis/API';
import Product from '../product/product';
import { Link } from 'react-router-dom';

function Home(props) {

    const [categories, setCategories] = useState([]);
    const [bestSellerProducts, setBestSellerProducts] = useState([]);

    useEffect(() => {
        getCategories();
        getBestSellerProducts();
    }, [])

    const getCategories = () => {
        getRequest("/categories").then((data) => {
            console.log('data', data);
            if (data) {
                setCategories(data);
            }
        })
    }

    const getBestSellerProducts = () => {
        getRequest("/products/bestsellers").then((data) => {
            console.log('data', data);
            if (data) {
                setBestSellerProducts(data);
            }
        })
    }

    return (
        <>
            <div className='carousal-container'>
                <Carousel indicators={false}>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/img/amazon-carousal-1.jpg"
                            alt="First slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/img/amazon-carousal-2.jpg"
                            alt="Second slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="/img/amazon-carousal-3.jpg"
                            alt="Third slide"
                        />
                        {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='container category-container'>
                <div className='row'>
                    {categories.map((category, index) => {
                        return (
                            <div key={index} className='col-12 col-sm-6 col-lg-4 my-3'>
                                <Card className='category py-2 px-3' >
                                    <h5>{category.name}</h5>
                                    <img src={category?.img} alt={category?.name} />
                                    <Link to={`/categories/${category?.id}`}>
                                        <span className='text-primary my-1'>See more</span>
                                    </Link>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='container bestseller-container mb-3'>
                <h3>Best Sellers</h3>
                <div className='row'>
                    {bestSellerProducts.map((product, index) => {
                        return (
                            <div key={index} className='col-12 col-sm-6 col-lg-4 my-3'>
                                <Product product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;