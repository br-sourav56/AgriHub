import React from 'react'

export default function Hero() {
    return (
        <section className='min-h-screen block bg-black '>
            <div className=''>
                <img className='w-full h-screen object-cover overflow-hidden' src="https://pickbazar-react-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F904%2Fgrocery.png&w=1920&q=75" alt="" />
                <div className="absolute inset-0 mt-8 flex w-full flex-col items-center justify-center p-5 text-center md:px-20 lg:space-y-10" >
                    <h1 className="text-2xl font-bold tracking-tight text-heading lg:text-4xl xl:text-5xl  text-custom-primary">Groceries Delivered in 4 Hours</h1>
                    <p className="text-sm text-heading lg:text-base xl:text-lg ">Get your healthy foods &amp; snacks delivered at your doorsteps all day everyday</p>
                    <div className="w-full max-w-3xl" >
                        <form className="w-full">
                        </form></div></div>
            </div>
        </section>
    )
}
