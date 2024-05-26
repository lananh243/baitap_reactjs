import React from 'react'

type Props = {
    type: "text" | "date" | "email" | "password"
    placeholder: string;
    style: any;
    onChange: () => void
}
export default function Input({type, placeholder, style, onChange}: Props) {
  return (
    <>
        <input
            style={style}
            type={type}
            className="form-control"
            placeholder={placeholder}
            onChange={onChange}
        />
    </>
  )
}
