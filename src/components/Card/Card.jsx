import React from 'react';
import './Card.css'

const Card = ({ cart }) => {
    console.log(cart)
    let totalPrice = 0
    let totalShipping = 0
    let quantity = 0
    for (const product of cart) {
        product.quantity = product.quantity || 1
        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    const tax = totalPrice * 7 / 100
    const grandTotal = totalPrice + totalShipping + tax

    return (
        <div className='Cart'>
            <h2>Products Review</h2>
            <h3>Selected Items : {quantity} </h3>
            <p>Total Price ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping ${totalShipping.toFixed(2)}</p>
            <p>Tax  :  ${tax.toFixed(2)}</p>
            <h3>Grand total : $
                {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Card;