import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div >
            <div className='header-container' >
                <img src={logo} alt="" />
                <div className='anchor'>
                    <a href="/shop"> Shop</a>
                    <a href="/order"> Order</a>
                    <a href="/inventory">
                        Inventory</a>
                    <a href="/Log in"> Log In</a>
                </div>

            </div>


        </div>
    );
};

export default Header;