import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function TeamsIndex() {
    const navigate = useNavigate();
    const teams = [
        {id:1,name:"CK20",member:4},
        {id:2,name:"B23VN",member:3},
        {id:3,name:"F4KC",member:6}
    ]
    const handleDetail = (id : number) => {
        navigate(`/teams/${id}`)
    }
  return (
    <div>
        <h1>Đây là trang TeamsIndex</h1>
        {teams.map((item) => {
            return (
                <div>
                    <p>Tên đội {item.name}</p>
                    <p>Thành viên {item.member}</p>
                    <button onClick={() => handleDetail(item.id)}>Xem chi tiết đội</button>
                </div>
            )
        })}
    </div>
  )
}
