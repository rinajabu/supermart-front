import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <Link to='/'>
            <h1>SuperMart</h1>
            </Link>
            <div className="header_nav">
                <div className="header_createForm">
                    <Link to='/create'>
                    <div className="header_createFormButton">Create</div>
                    </Link>
                </div>
                <div className="header_cart">
                    Cart: 0
                </div>
            </div>
        </div>
    )
}

export default Header
