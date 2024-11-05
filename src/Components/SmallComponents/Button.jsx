import React from 'react'

export default function InputButton({ text, type }) {
    return (
        <input onClick className='w-full bg-custom-primary hover:bg-custom-primary-dark px-2 py-3 rounded cursor-pointer text-white text-xl' type={type ? type : 'button'} value={text} />
    )
}
