import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from '../../store/reducers/userReducer';

export default function User() {
    const users = useSelector((state:any) => state.userReducer.users);
    const dispatch = useDispatch();
    const handleAddUser = () => {
        const newUser:any = { id: 5, name: "Nguyễn Văn E" };
        dispatch(addUser(newUser));
      };
    const handleDelete = (id:number) => {
        dispatch(deleteUser(id));

    }
  return (
    <div>
        <h1>Bài 7</h1>
        {users.map((user:any) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>Favorites : <i className="fa-regular fa-heart"></i></p>
          <button onClick={() => handleDelete(user.id)}>Delete User</button>
          <br /><br />
        </div>
      ))}
      <button onClick={handleAddUser}>Add User</button>
      
    </div>
  )
}
