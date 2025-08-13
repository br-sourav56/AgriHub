import React, { useContext, useState } from 'react'
import InputButton from '../../Components/SmallComponents/Button'
import { ShopContext } from '../../Components/Context/Context'
import toast from 'react-hot-toast';

export default function Cart() {
    const { cartItems, totalTk, removeFromCart } = useContext(ShopContext)

    const orderHandler = () => {
        toast.success('Order Complete!')
    }

    return (
        <section className='mb-10 '>
            <h2 className=' text-center mt-28 mb-10 font-bold text-2xl text-custom-primary'>Cart</h2>
            <div className="overflow-x-auto mx-auto max-w-screen-xl px-10 grid grid-cols-3 gap-8">
                <table className="table col-span-2">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        {cartItems.map((item, i) => {
                            // setItemPrice(itemPrice + item.discountPrice)
                            return <tr key={i}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h- w-12">
                                                <img
                                                    src={item.link}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>
                                        </div>
                                    </div>
                                </td>

                                <td>{item.discountPrice}</td>
                                <th>
                                    <button onClick={() => removeFromCart(item.id)} className="btn btn-square btn-outline">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </th>
                            </tr>
                        })}

                    </tbody>
                    {cartItems.length === 0 && <h2 className='text-2xl text-center mt-8'> Please Add to Cart!</h2>}


                </table>

                <div className='bg-[#f9fafb] p-4'>
                    <div className="overflow-x-auto grid">
                        <form action="">
                            <table className="table mb-3">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className='text-xl'>Order summary
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>{`৳${totalTk}`}</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Shipping estimate
                                        </td>
                                        <td>$free</td>
                                    </tr>
                                    <tr>
                                        <td>Tax estimate
                                        </td>
                                        <td>$0.00</td>
                                    </tr>
                                    <tr className='text-xl'>
                                        <td>Order total </td>
                                        <td>{`৳ ${totalTk}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <input onClick={orderHandler} className='w-full bg-custom-primary hover:bg-custom-primary-dark px-2 py-3 rounded cursor-pointer text-white text-xl' type={'button'} value={"Order Now!"} />

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}
