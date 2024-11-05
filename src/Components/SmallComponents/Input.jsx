import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Input({ placeholder, type, border, onChange }) {
    const borderColor = `input-${border}`;
    const onChangeHandler = e => {
        onChange(e.target.value)
    }
    return (
        <input
            onChange={onChangeHandler}
            type={type ? type : "text"}
            placeholder={placeholder ? placeholder : ''}
            className={`input input-bordered w-full  ${borderColor}`} />
    )
}

