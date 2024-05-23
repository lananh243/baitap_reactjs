import React from 'react'
interface Props {
    todos: []
}
export default function TodoList(props: Props) {
  return (
    <div>
        <ul>
        {props.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  )
}
