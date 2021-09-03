import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MoreVertSharpIcon from '@material-ui/icons/MoreVertSharp';
import Dropdown from 'react-bootstrap/Dropdown'


const Header = (props) => {
    
    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="header sticky-top navbar">
            <Link to='/'>
            <h1 className="header_title">SuperMart</h1>
            </Link>
            <div className="header_nav">

                <div className="header_cart">
                    <Link to='/checkout'>
                    <div className="header_cartButton">
                        <ShoppingCartIcon />{cart?.length}
                    </div>
                    </Link>
                </div>

                <Dropdown className="header_dropdown">

                    <Dropdown.Toggle className="header_dropdownMenu">
                        <MoreVertSharpIcon />
                    </Dropdown.Toggle>
                        
                    <Dropdown.Menu>

                        <Dropdown.Item>
                            <Link to='/create'>
                            <div className="header_create">
                                Create Product
                            </div>
                            </Link>
                        </Dropdown.Item>

                    {/* WORKING ONLY ON BACK END AND ONLY TO LOCALHOST */}
                        <Dropdown.Item 
                            href="http://localhost:8000/login" 
                            target="_blank" 
                            className="header_login"
                        >
                            Login
                        </Dropdown.Item>

                        <Dropdown.Item 
                            href="http://localhost:8000/register" target="_blank" 
                            className="header_signup"
                        >
                            Sign Up
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>
                
            </div>
        </div>
    )
}

export default Header
