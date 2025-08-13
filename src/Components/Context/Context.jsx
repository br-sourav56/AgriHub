/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import React, { createContext } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../Firebase/Firebase.js";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const ShopContext = createContext(null)


const getDefaultCartDeta = () => {
    let cart = {};

    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    }
    // console.log(cart);

    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([])
    const [allData, setAllData] = useState([])
    const [user, setUser] = useState()
    const [productsList, setProductsList] = useState([])
    const [cartCount, setCartCount] = useState([])
    const [totalCartItem, setTotalCartItem] = useState(0)
    const [totalTk, setTotalTk] = useState(0)
    const loginContext = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const logOutContext = () => {
        signOut(auth)
    }

    const addToCart = (itemId) => {
        if (cartItems.find((e) => e.id === itemId)) {
            return
        } else {
            const cartProduct = productsList.find((product) => product.id === itemId)
            setCartItems((prev) => ([...prev, cartProduct]))
            setTotalTk(totalTk + Number(cartProduct.discountPrice))
        }
    }
    const getProductData = (data) => {
        console.log(data);
        setAllData(data)
    }

    const getTotalAmmount = () => {
        let tk = 0
        cartItems.map(e => tk += Number(e.discountPrice))
        setTotalTk(tk)
        console.log(tk);

    }

    const removeFromCart = (itemId) => {
        let updatedcartitems = cartItems.filter(item => item.id !== itemId)
        const cartProduct = productsList.find((product) => product.id === itemId)
        setCartItems(updatedcartitems)
        setTotalTk(totalTk - Number(cartProduct.discountPrice))

    }



    const getProductsData = async () => {
        let ab = []
        const docs = query(collection(db, 'products'))
        const docRef = await getDocs(docs)
        docRef.forEach((doc) => {
            // setProductsList(...productsList, doc.data())
            ab.push(doc.data())
        })
        setProductsList(ab)
    }




    useEffect(() => {
        getProductsData()
        getTotalAmmount()

    }, [])

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (cuser) => {
            setUser(cuser)
        })

        return unsubscriber
    }, [])


    const contextValue = { productsList, user, logOutContext, totalTk, getTotalAmmount, totalCartItem, cartCount, loginContext, allData, getProductData, cartItems, addToCart, removeFromCart }
    // console.log(cartItems);
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider