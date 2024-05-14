import React from "react";

interface State {
  users: User[];
}
interface User {
  id: number;
  name: string;
  address: string;
}
export default function Bai3() {
  let users = [
    {
      id: 1,
      name: "Nam",
      address: "Hà nội",
    },
    {
      id: 2,
      name: "Minh",
      address: "Hồ Chí Minh",
    },
    {
      id: 3,
      name: "Mai",
      address: "Hà nội",
    },
  ];
  return (
    <div>
      Bài 3
        {users.map((users: User) => {
          return (
            <>
              <div key={users.id}>
                <p>Họ và tên : {users.name}</p>
                <p>Id : {users.id}</p>
                <p>Địa chỉ : {users.address}</p>
                <p>****************************</p>
              </div>
            </>
          );
        })}
    </div>
  );
}
