import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

import SingleProduct from '../SingleProduct/SingleProduct';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../Utilities/Calculate';

import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPage] = useState(10)



    const totalProduct = useLoaderData()
    const totalPage = Math.ceil(totalProduct.totalProducts / itemsPerPage)
    const pageNumbers = [...Array(totalPage).keys()]




    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)

            const data = await response.json()


            setProducts(data)
        }
        fetchData()
    }, [currentPage, itemsPerPage])





    useEffect(() => {

        const storedCart = getShoppingCart()
        const ids = Object.keys(storedCart)

        fetch(`http://localhost:5000/productsByIds`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ids)

        })
            .then(res => res.json())
            .then(cartProduct => {
                const savedCart = []
                // step 1 get the singe id
                for (const id in storedCart) {
                    // step 2 get product by using id
                    const savedProduct = cartProduct.find(product => product._id === id)

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
            })




    }, [])

    const handleAddToCart = (product) => {
        const newCArt = [...cart, product]
        setCart(newCArt)
        addToDb(product._id)
    }
    const handleDeleteCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    const options = [5, 10, 15, 20]
    const handleOnSelectChange = (event) => {
        setItemsPage(parseInt(event.target.value))
        setCurrentPage(0)
    }
    return (
        <>
            <div className='shop-contauiner'>
                <div className='products-container'>

                    {
                        products.map(product => <SingleProduct product={product} key={product._id} handleAddToCart={handleAddToCart}></SingleProduct>)
                    }

                </div>
                <div className='review-container'>
                    <Card handleDeleteCart={handleDeleteCart} cart={cart}>
                        <Link to='/orders'>
                            <button className='checkout'>
                                Order Review
                            </button>
                        </Link>

                    </Card>


                </div>
            </div>
            <div className='pagination'>
                <p>current page{currentPage}</p>
                {
                    pageNumbers.map(number => <button key={number}
                        className={currentPage === number ? 'selected' : ''}
                        onClick={() => setCurrentPage(number)}
                    >{number}

                    </button>)
                }


                <select value={itemsPerPage} onChange={handleOnSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))

                    }
                </select>
            </div>


        </>

    )
};


export default Shop;