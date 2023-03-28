import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import SingleProduct from '../SingleProduct/SingleProduct';
import { addToDb, getShoppingCart } from '../Utilities/Calculate';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {

        const storedCart = getShoppingCart()
        const savedCart = []
        // step 1 get the singe id
        for (const id in storedCart) {
            // step 2 get product by using id
            const savedProduct = products.find(product => product.id === id)

            // step 3 get quantity of the prodcut
            if (savedProduct) {
                const quantity = storedCart[id]
                savedProduct.quantity = quantity
                //  step 4 add the savedProduct to the savedCart
                savedCart.push(savedProduct)

            }
            // step 5 set the Cart to the state
            setCart(savedCart)
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCArt = [...cart, product]
        setCart(newCArt)
        addToDb(product.id)
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