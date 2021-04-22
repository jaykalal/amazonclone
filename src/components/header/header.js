import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getRequest } from '../../apis/API';
import './header.css';

function Header() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, [])

    const getCategories = () => {
        getRequest("/categories").then((data) => {
            console.log('data', data);
            setCategories(data);
        })
    }

    return (
        <>
            <nav className='sticky-top'>
                <nav className="header">
                    {/* logo on the left -> img */}
                    <Link to="/">
                        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
                    </Link>
                    {/* search box */}
                    <div className="header__search">
                        <input type="text" className="header__searchInput" placeholder="Search products ..." />
                        {/* <SearchIcon className="header__searchIcon" /> */}
                    </div>
                    {/* 3 links */}
                    <div className="header__nav">
                        <Link to={"/login"} className="header__link" onClick={() => {
                            if (localStorage.getItem('token')) {
                                localStorage.removeItem('token');
                            }
                        }}>
                            <div className="header__option">
                                <span className="header__optionLineOne">Hello User</span>
                                <span className="header__optionLineTwo">{(localStorage.getItem('token')) ? "Sign Out" : "Sign In"}</span>
                            </div>
                        </Link>
                    </div>

                    <div className="header__nav">
                        <Link to="/login" className="header__link">
                            <div className="header__option">
                                <span className="header__optionLineOne">Returns</span>
                                <span className="header__optionLineTwo">& Orders</span>
                            </div>
                        </Link>
                    </div>

                    <div className="header__nav">
                        <Link to="/login" className="header__link">
                            <div className="header__option">
                                <span className="header__optionLineOne">Your</span>
                                <span className="header__optionLineTwo">Prime</span>
                            </div>
                        </Link>
                    </div>

                    {/* basket icon with number*/}
                </nav>
                <nav className='header'>
                    <Link className='nav-link text-white' to={`/`}>
                        Home
                    </Link>
                    {
                        categories?.map((category, index) => {
                            return (
                                <div key={index}>
                                    <Link className='nav-link text-white' to={`/categories/${category?.id}`}>
                                        {category?.name}
                                    </Link>
                                </div>
                            )
                        })
                    }
                </nav>
            </nav>
        </>
    )
}

export default Header

