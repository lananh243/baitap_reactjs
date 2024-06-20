import React from 'react'
import "./b7.css"
import { useDispatch, useSelector } from 'react-redux'

export default function Bai7() {
    const checkboxState = useSelector((state:any) => state.changeRegimeReducer);
    const dispatch = useDispatch();

    const changeContent = () => {
        dispatch({
            type: "CHANGE_CHECKBOX"
        })
    }

    return (
        <div>
            <h1>Bài 7,8</h1>
            <div className={checkboxState ? 'dark-mode' : 'light-mode'}>
                <input type="checkbox" checked={checkboxState} onChange={changeContent}/>
                <span>{checkboxState ? 'Tối' : 'Sáng'}</span>
            </div>
        </div>
    )
}