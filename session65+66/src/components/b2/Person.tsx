import React from "react";
import { useSelector } from "react-redux";

export default function Person() {
  const statePerson = useSelector((state: any) => {
    return state;
  });
  console.log(statePerson);

  return (
    <div>
      Bài 2
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {statePerson.personReducer.map((item: any, index:number) => {
            return (
              <tr key={item.id}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.date}</td>
                <td>{item.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
