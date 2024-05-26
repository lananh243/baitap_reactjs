import React, { useCallback, useState } from 'react'
import CountValue from './assets/components/b1/CountValue'
import UserList from './assets/components/b2/UserList';
import ColorPicker from './assets/components/b3/ColorPicker';
import RandomNumberGenerator from './assets/components/b4/RandomNumberGenerator';
import TodoList from './assets/components/b5/TodoList';
import LoginForm from './assets/components/b6/LoginForm';

export default function App() {
  const [count, setCount] = useState<number>(0)
 
  const handleClick = useCallback (() => {
    setCount((prevCount) => prevCount + 1);
  }, [])

  const [color, setColor] = useState<string>('black')
  const handleChangeColor = useCallback ((e:React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  }, []);

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
      <CountValue count={count}></CountValue>
      <button onClick={handleClick}>Increate</button>
      <UserList></UserList>

      <h1>Bài 3</h1>
      <b>Màu người dùng chọn</b>
      <input type="color" onChange={handleChangeColor}/>
      <ColorPicker color={color}></ColorPicker>
      <RandomNumberGenerator></RandomNumberGenerator>

      <h1>Bài 5</h1>
      <input type="text" value={newTodo} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos}></TodoList>
      <LoginForm></LoginForm>
    </div>
  )
}
