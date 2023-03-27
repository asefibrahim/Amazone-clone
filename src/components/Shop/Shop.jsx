import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import SingleProduct from '../SingleProduct/SingleProduct';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        const newCArt = [...cart, product]
        setCart(newCArt)
    }

    return (
        <div className='shop-contauiner'>
            <div className='products-container'>

                {
                    products.map(product => <SingleProduct product={product} key={product.id} handleAddToCart={handleAddToCart}></SingleProduct>)
                }

            </div>
            <div className='review-container'>
                <Card cart={cart}></Card>


            </div>
        </div>
    );
};

export default Shop;