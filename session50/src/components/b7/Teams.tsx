import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Teams() {
    const teams = [
        {id:1,name:"CK20",member:4,description:"có 1 ko 2"},
        {id:2,name:"B23VN",member:3,description:"Duy nhất"},
        {id:3,name:"F4KC",member:6,description:"ai địch lại nổi"}
    ]
    const params = useParams();
    const id = params.teamId;
    const teamDetail = teams.find((item) => {
        return item.id === Number(id)
    })
  return (
    <div>
        <div>
            <h3>Chi tiết đội</h3>
            <p>Tên đội :{teamDetail?.name}</p>
            <p>Thành viên :{teamDetail?.member}</p>
            <p>Mô tả :{teamDetail?.description}</p>
        </div>
    </div>
  )
}
