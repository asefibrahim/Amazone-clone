import { getShoppingCart } from "../components/Utilities/Calculate"

const cartProductLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()


    // if cart data is in the database you must use async funtion for loading Data

    const storedCart = getShoppingCart()
    const savedCart = []
    for (const id in storedCart) {
        const addedProducts = products.find(pd => pd.id === id)
        if (addedProducts) {
            const quantity = storedCart[id]
            addedProducts.quantity = quantity
            savedCart.push(addedProducts)
        }
    }



    return savedCart;
}
export { cartProductLoader }