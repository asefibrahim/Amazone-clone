import { getShoppingCart } from "../components/Utilities/Calculate"

const cartProductLoader = async () => {


    const storedCart = getShoppingCart();
    const ids = Object.keys(storedCart);

    const loadedProducts = await fetch(`http://localhost:5000/productsByIds`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ids)
    });

    const products = await loadedProducts.json();


    // if cart data is in the database you must use async funtion for loading Data


    const savedCart = []
    for (const id in storedCart) {
        const addedProducts = products.find(pd => pd._id === id)
        if (addedProducts) {
            const quantity = storedCart[id]
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
    }



    return savedCart;
}
export { cartProductLoader }