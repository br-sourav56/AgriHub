import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export default function fetchProductsData() {
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        async function fetchData() {
            let ab = []
            const docs = query(collection(db, 'products'))
            const docRef = await getDocs(docs)
            docRef.forEach((doc) => {
                // setProductsList(...productsList, doc.data())
                ab.push(doc.data())
            })
            setProductsList(ab)
        }
        fetchData()

    }, []);

    return productsList;
}
