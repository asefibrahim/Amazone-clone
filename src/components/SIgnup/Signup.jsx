import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/TheAuthProviders';

const Signup = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(email, password, confirm)
        if (password !== confirm) {
            setError('Password did not match')
            return
        }
        else if (password.length < 6) {
            setError('Password should be at least six characters long')
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
            })
            .then(error => {
                setError(error.message)
            })

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up </h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type='password' name="password" id="" required />

                </div>
                <div className="form-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type='password' name="confirm" id="" required />

                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p><small>New to Ema-john? <Link to="/signup">Create New Account</Link></small></p>

            <p className='text-error'>{error}</p>

        </div>
    );
};

export default Signup;