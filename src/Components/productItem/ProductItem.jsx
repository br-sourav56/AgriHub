import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/Context'
import toast from 'react-hot-toast';


export default function ProductItem({ name, img, price, discountPrice, category, id }) {
    let discount = Math.floor(((price - discountPrice) / price) * 100)
    const { mainProduct, addToCart, user } = useContext(ShopContext)
    const addToCartHandler = () => {
        if (!user) {
            toast.error('Login First!')
            return
        }
        addToCart(id)
        toast.success('Product Added!')
    }
    return (

        <div className='product-card cart-type-helium h-full overflow-hidden rounded border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm'>
            <Link to={`/products/${id}`}>
                <div className='relative flex overflow-hidden h-48 w-auto items-center justify-center sm:h-64'>
                    <img src={img} alt="" />
                    <div className="absolute top-3 right-3 rounded-full bg-yellow-500 px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4" >{`${discount}%`}</div>
                </div>
                <header className="relative p-3 md:p-5 md:py-6">
                    <h3 role="button" className="mb-2 text-sm font-semibold truncate text-heading">{name}</h3>
                    <div className="relative flex  text-custom-primary items-center justify-between mt-7 min-h-6 md:mt-8" >
                        <div className="relative" >
                            <del className="absolute text-xs italic text-opacity-75 -top-4 text-muted md:-top-5">{`৳${price}`}</del>
                            <span className="text-sm font-semibold text-accent md:text-base">{`৳${discountPrice}`}</span></div>
                        <div >
                            <button onClick={addToCartHandler} className="order-5 flex items-center justify-center rounded-full border-2 border-border-100 bg-light px-3 py-2 text-sm font-semibold text-accent transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-yellow-100    sm:order-4 sm:justify-start sm:px-5"><svg className="h-4 w-4 ltr:mr-2.5 rtl:ml-2.5" viewBox="0 0 14.4 12"><g transform="translate(-288 -413.89)"><path fill="currentColor" d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"></path></g></svg><span className='ml-2'>Cart</span> </button>
                        </div>
                    </div>
                </header>
            </Link>
        </div>
    )
}
