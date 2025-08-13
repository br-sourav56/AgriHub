import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/Context'

export default function Header() {
    const { user, logOutContext, totalCartItem } = useContext(ShopContext)

    const [totalitems, setTotalItems] = useState(0)

    if (totalCartItem) {
        setTotalItems(totalCartItem.map(e => console.log(e)
        ))
    }
    const logoutHandler = async () => {
        try {
            await logOutContext()
            console.log('logout');


        } catch (error) {
            console.log(error);

        }
    }

    return (
        <header className="bg-white fixed w-full top-0 left-0 z-50">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">
                        <Link className="block text-teal-600" to={'/'}>
                            <span className="sr-only">Home</span>
                            <h2 className='text-2xl font-mono'>AgriHub</h2>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link to={'/products'} className="text-gray-500 transition hover:text-gray-500/75" href="#"> Products </Link>
                                </li>


                                <li>
                                    <Link className="text-gray-500 transition hover:text-gray-500/75" to={'/contact'}> Contact </Link>
                                </li>

                                <li>
                                    <Link to={'/faq'} className="text-gray-500 transition hover:text-gray-500/75" href="#"> Faq </Link>
                                </li>
                                <li>
                                    <Link to={'/add_product'} className="text-gray-500 transition hover:text-gray-500/75" href="#">Add Product</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            {!user && <>
                                <Link
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    to={'/login'}
                                >
                                    Login
                                </Link>

                                <div className="hidden sm:flex">
                                    <Link
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        to={'/signup'}                                >
                                        Register
                                    </Link>
                                </div>
                            </>}
                            {user && <>
                                <Link
                                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                                    to={'/cart'}
                                >
                                    Cart
                                </Link>

                                <div className="hidden sm:flex">
                                    <button
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                                        onClick={logoutHandler}                            >
                                        Log Out
                                    </button>
                                </div>
                            </>}
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="size-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}
