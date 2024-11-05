import React from 'react'
import { Link } from 'react-router-dom'

export default function Offer() {
    return (
        <div className='w-full px-2 flex my-6'>
            <Link to={'/products'} className=' border-r-2 m-2 w-1/3 cursor-pointer'>
                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75" alt="" />
            </Link>
            <Link to={'/products'} className='m-2 w-1/3 text-gray-50 cursor-pointer'>
                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75" alt="" />
            </Link>
            <Link to={'/products'} className=' m-2 w-1/3 text-gray-50 cursor-pointer'>
                <img src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Foffer-3.png&w=640&q=75" alt="" />
            </Link>
        </div>
    )
}
