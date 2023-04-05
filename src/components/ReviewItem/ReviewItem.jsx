import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({ product, handleDelete }) => {
    const { id, img, name, price, quantity } = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='title'> {name} </p>


                <p> Price : <span className='orange'>{price}</span> </p>
                <p> Quantity : <span className='orange'>{quantity}</span></p>
            </div>
            <button onClick={() => handleDelete(id)} className='btn-delete'>
                <TrashIcon />
            </button>

        </div>
    );
};

export default ReviewItem;