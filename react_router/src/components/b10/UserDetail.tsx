import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

export default function UserDetail() {
    const { id } = useParams(); 
    const users = [
        { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
        { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
        { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
    ];
    const user = users.find(user => user.id === parseInt(id));
  return (
    <div>
        {user ? (
            <div>
                <h3 style={{display:"flex", justifyContent:"center"}}>Thông tin chi tiết</h3>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                    <Card style={{width:"300px", height:"240px"}}>
                        <Card.Body>
                            <Card.Text>Id : {user.id}</Card.Text>
                            <Card.Text>UserName : {user.name}</Card.Text>
                            <Card.Text>Email : {user.email}</Card.Text>
                            <Card.Text>Address : {user.address}</Card.Text>
                            <Button style={{width:"100%"}} variant="primary">Xem chi tiết</Button>
                        </Card.Body>
                    </Card>  
                </div>  
            </div>  
        ):(
            <p>Người dùng không tồn tại</p>
        )}
   
    </div>
  )
}
