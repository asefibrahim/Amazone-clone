import React, { useState } from 'react';
import Card from '../Card/Card';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { removeFromCart } from '../Utilities/Calculate';
const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleDelete = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removeFromCart(id)
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
                <Card cart={cart}></Card>

            </div>



        </div>
    );
};

export default Orders;