import React from 'react'

type Props = {
    title: string;
    type: "primary" | "danger" | "success" | "warning";
    size: "big" | "small";
    onClick: () => void;
}
const btn_primary = "primary";
const btn_danger = "danger";
const btn_success = "success";
const btn_warning = "warning"
const btn_large = "big"
const btn_small = "small"
export default function Button({title, type, size, onClick} : Props ) {
  return (
    <div>
        <button
            onClick={onClick}
            className={`btn btn-${
            type === btn_primary 
            ? btn_primary 
            : type === btn_danger
            ? btn_danger
            : type === btn_success
            ? btn_success
            : btn_warning
            } btn-${size === btn_large ? btn_large : btn_small}`}
        >{title}</button>
    </div>
  )
}
