import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  deleteUser,
  getAllUser,
  updateUser,
} from "../../store/reducers/userReducer";

export default function User() {
  // lấy data về
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const handleDeleteUser = (id: number) => {
    let confirmDelete = window.confirm("Bạn có muốn xóa ko ???");
    if (confirmDelete) {
      dispatch(deleteUser(id));
    }
  };
  // Hàm thêm mới
  const addNewUser = () => {
    let newUser = {
      name: "ly",
    };
    dispatch(addUser(newUser));
  };
  // Hàm cập nhật
  const handleUpdateUser = (user: any) => {
    let newUser = { ...user, name: "hoa hồng" };
    dispatch(updateUser(newUser));
  };
  // Hàm thêm mới user
  return (
    <div>
      <h2>Danh sách user</h2>
      <button onClick={addNewUser}>Thêm user</button>
      <ul>
        {data.userReducer.users.map((user: any) => {
          return (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleDeleteUser(user.id)}>Xóa</button>
              <button onClick={() => handleUpdateUser(user)}>Cập nhật</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
