import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <Link to='/'>
            <h1>Supermart</h1>
            </Link>
            <div className="header_nav">
                <div className="header_createForm">
                    <Link to='/create'>
                    <span className="header_createFormButton">Create</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
