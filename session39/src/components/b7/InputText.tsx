import React, { useReducer } from 'react'

export default function InputText() {
  const reducer = (state:any, action: any) => {
    switch(action.type){
      case "value":
        return action.payload
      default:
        return state;
    }
  }
  let inputData = '';
  const result = useReducer(reducer,inputData)
  const [state, dispatch] = result;
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch({type : "value",payload: e.target.value})
  }
  return (
    <div>
      <h1>Bài 7</h1>
      <h2>{state}</h2>
      <input type="text" placeholder='Nhập dữ liệu' onChange={changeInput}/>
    </div>
  )
}
