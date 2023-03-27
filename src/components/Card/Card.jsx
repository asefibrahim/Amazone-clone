import React from 'react';
import './Card.css'

const Card = ({ cart }) => {
    let totalPrice = 0
    let totalShipping = 0
    for (const product of cart) {
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='Cart'>
            <h2>Products Review</h2>
            <h3>Selected Items : {cart.length} </h3>
            <p>Total Price ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping ${totalShipping.toFixed(2)}</p>
            <p>Tax  :  ${tax.toFixed(2)}</p>
            <p>Grand total : $
                {grandTotal.toFixed(2)} </p>
        </div>
    );
};

export default Card;