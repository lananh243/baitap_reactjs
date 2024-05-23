import React, { useReducer } from 'react'

export default function InputRadio() {
    const reducer = (state:any, action: any) => {
        switch (action.type) {
            case "value":
                return action.payload
            default:
                return state
        }
    }
    const inputRadio = '';
    const result = useReducer(reducer,inputRadio);
    const [state, dispatch] = result
    const changeGender = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: "value", payload: e.target.value})
    }
  return (
    <div>
        <h1>Bài 8</h1>
        <input onChange={changeGender} type="radio" value={"Nam"} checked={state === 'Nam'}/>Nam
        <input onChange={changeGender} type="radio" value={"Nữ"} checked={state === 'Nữ'}/>Nữ
        <input onChange={changeGender} type="radio" value={"Khác"} checked={state === 'Khác'}/>Khác
        <h2>Selected gender : {state}</h2>
    </div>
  )
}
