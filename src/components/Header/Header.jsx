import React, { useContext } from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Providers/TheAuthProviders';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleSIgnOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => {
                console.log(error.message);
            })
    }


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
                    <Link to="/signup"> Sign up</Link>
                    {user &&
                        <div>
                            <span className='text-white'>Welcome {user.email}</span>
                            <button onClick={handleSIgnOut}>Sign Out</button>

                        </div>
                    }
                </div>

            </div>


        </div>
    );
};

export default Header;