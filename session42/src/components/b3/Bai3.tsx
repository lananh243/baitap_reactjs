import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function Bai3() {
  return (
    <div style={{display:'flex', gap: "30px"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/08/22/1190454/laptop-vien-man-hinh-mong-co-nhung-uu-va-nhuoc-diem-gi--4.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign:'right'}}>MacBook Air 2018</Card.Title>
        <Card.Text style={{textAlign:'right'}}>
          The reason I am selling the 
          machine is because it is too 
          much power for what I need
        </Card.Text>
        <div style={{display:'flex', gap:'20px'}}>
          <Button variant="primary">Xem chi tiết</Button>
          <span>30.000.000 đ</span>
        </div>
        
      </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.tgdd.vn/Files/2019/08/22/1190454/laptop-vien-man-hinh-mong-co-nhung-uu-va-nhuoc-diem-gi--4.jpg" />
      <Card.Body>
        <Card.Title style={{textAlign:'right'}}>MacBook Air 2018</Card.Title>
        <Card.Text style={{textAlign:'right'}}>
          The reason I am selling the 
          machine is because it is too 
          much power for what I need
        </Card.Text>
        <div style={{display:'flex', gap:'20px'}}>
          <Button variant="primary">Xem chi tiết</Button>
          <span>30.000.000 đ</span>
        </div>
        
      </Card.Body>
      </Card>
    </div>
  )
}
