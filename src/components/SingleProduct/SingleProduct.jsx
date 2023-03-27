import React from 'react';
import './singleProduct.css'
const SingleProduct = (props) => {
    const { name, img, price, seller, ratings } = props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='card-container'>
            <img className='img' src={img} alt="" />
            <h2 className="font-bold">
                {name}

            </h2>
            <p >Price : {price} </p>
            <p>Manufacturer : {seller}</p>
            <p>Ratings : {ratings} Stars</p>
            <button onClick={() => handleAddToCart(props.product)} className='button'>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;