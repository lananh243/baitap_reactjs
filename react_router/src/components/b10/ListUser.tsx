import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function ListUser() {
    const navigate = useNavigate();
    const users = [
        { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
        { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
        { id: 3, name: "Nguyễn Văn C", email: "nvc@gmail.com", address: "Ninh Bình" }
    ];
  return (
    <>
        <div style={{display:"flex", justifyContent:"space-evenly",marginTop:"50px"}}>
            {users.map(user => (
                <Card key={user.id} style={{width:"300px", height:"240px"}}>
                    <Card.Body>
                        <Card.Text>Id : {user.id}</Card.Text>
                        <Card.Text>UserName : {user.name}</Card.Text>
                        <Card.Text>Email : {user.email}</Card.Text>
                        <Card.Text>Address : {user.address}</Card.Text>
                        <Button onClick={() => navigate(`/users/${user.id}`)} style={{width:"100%"}} variant="primary">Xem chi tiết</Button>
                    </Card.Body>
                </Card>
            ))}
            
        </div>
    </>
  )
}
