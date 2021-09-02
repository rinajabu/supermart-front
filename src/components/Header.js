import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './Header.css';

const Header = (props) => {
    
    const [{cart}, dispatch] = useStateValue();

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
                    <Link to='/checkout'>
                    <div className="header_cartButton">
                        Cart: {cart?.length}
                    </div>
                    </Link>
                </div>
                {/* WORKING ONLY ON BACK END AND ONLY TO LOCALHOST */}
                <div className="header_login">
                    <a href="http://localhost:8000/login" target="_blank">Login</a>
                </div>
                <div className="header_signup">
                    <a href="http://localhost:8000/register" target="_blank">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Header
