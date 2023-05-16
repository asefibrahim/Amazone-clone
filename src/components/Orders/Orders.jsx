import React, { useState } from 'react';
import Card from '../Card/Card';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromCart } from '../Utilities/Calculate';
const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleDelete = (id) => {
        const remaining = cart.filter(product => product._id !== id)
        setCart(remaining)
        removeFromCart(id)
    }

    const handleDeleteCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-contauiner'>
            <div className='product-container'>
                {
                    cart.map(product => <ReviewItem product={product}
                        handleDelete={handleDelete}

                    ></ReviewItem>)
                }
            </div>
            <div className='review-container'>
                <Card handleDeleteCart={handleDeleteCart} cart={cart}>

                    <Link to='/checkout'>
                        <button className='checkout'>
                            Proceed Checkout
                        </button>
                    </Link>

                </Card>

            </div>



        </div>
    );
};

export default Orders;