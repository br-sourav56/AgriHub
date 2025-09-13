import { doc, setDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';

export default function CreateProduct() {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDiscountPrice, setProductDiscountPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDes, setProductDes] = useState('')
    const [productLink, setProductLink] = useState('')
    const navigate = useNavigate()

    const addProductHandler = async (e) => {
        e.preventDefault()
        if (productName !== '' || productPrice !== '' || productCategory !== '' || productDes !== '' || productLink !== '' || productDiscountPrice !== '') {

            await setDoc(doc(db, 'products', productName.replace(/\s/g, '')), {
                name: productName,
                price: productPrice,
                category: productCategory,
                des: productDes,
                link: productLink,
                discountPrice: productDiscountPrice,
                id: productName.replace(/\s/g, '').toLowerCase()
            })

            toast.success('Product Add Successful!')


        } else {
            toast.error('Prodcut Add Faild!')

        }

    }
    return (

        <div className=''>
            <div id="defaultModal" aria-hidden="true" className="my-20 flex overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 md:h-full">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div className="relative  p-4 bg-white rounded-lg border dark:bg-gray-800 sm:p-5">
                        <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Add Product
                            </h3>
                        </div>

                        <form action="#" onSubmit={addProductHandler}>
                            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input type="text" value={productName} onChange={e => setProductName(e.target.value)} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                </div>

                                <div>
                                    <label htmlFor="real_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Original Price</label>
                                    <input type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} name="price" id="real_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                                <div>
                                    <label htmlFor="discount_price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Discount Price</label>
                                    <input type="number" value={productDiscountPrice} onChange={e => setProductDiscountPrice(e.target.value)} name="price" id="discount_price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                </div>
                                <div>
                                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select id="category" value={productCategory} onChange={e => setProductCategory(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PHONE">Phones</option>
                                        <option value="FRUITS">Fruits</option>
                                        <option value="JUICE">Juice</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="picture_link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture Link</label>
                                    <input type="text" value={productLink} onChange={e => setProductLink(e.target.value)} name="picture_link" id="picture_link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Picture link here" required="" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <textarea id="description" value={productDes} onChange={e => setProductDes(e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Write product description here"></textarea>
                                </div>
                            </div>
                            <button type="submit" className="text-white inline-flex items-center bg-custom-primary hover:bg-custom-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" ></path></svg>
                                Add new product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
