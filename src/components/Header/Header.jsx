import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div >
            <div className='header-container' >
                <img src={logo} alt="" />
                <div className='anchor'>
                    <Link to="/"> Shop</Link>
                    <Link to="/orders"> Order</Link>
                    <Link to="/inventory">
                        Inventory</Link>
                    <Link to="/login"> Log In</Link>
                </div>

            </div>


        </div>
    );
};

export default Header;