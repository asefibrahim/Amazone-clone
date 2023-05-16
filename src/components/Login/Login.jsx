import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { AuthContext } from '../Providers/TheAuthProviders';

const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                form.reset()
                navigate(from, { replace: true })
            })
            .then(error => {
                console.log(error.message);
            })

    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="" required />
                    <p onClick={() => setShow
                        (!show)}> <small>

                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>



                    </p>

                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>
        </div>
    );
};

export default Login;