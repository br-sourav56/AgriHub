/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'
import fetchProductsData from '../fetchData'
import { ShopContext } from '../Context/Context'
import ProductDetails from '../../Pages/ProductDetails/ProductDetails';


export default function Products() {

    const { productsList } = useContext(ShopContext)

    return (
        <div className='w-full px-4 pt-3.5  pb-16 lg:p-6 xl:p-8'>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
                {productsList.map((e, i) => {
                    return <ProductItem key={i} name={e.name} id={e.id} discountPrice={e.discountPrice} price={e.price} category={e.category} des={e.des} img={e.link} />
                })}
            </div>
        </div>
    )
}