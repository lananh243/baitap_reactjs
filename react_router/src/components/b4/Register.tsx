import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Register() {
  return (
    <>
    <div style={{width:"450px", height:"450px", border: "1px solid grey", margin:"auto", marginTop:"130px"}}>
      <h1 style={{display:"flex", justifyContent:"center"}}>Create account</h1>
      <Form style={{paddingLeft:"30px"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={{width:"390px"}}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:"390px"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:"390px"}}>
          <Form.Label>Confirm password</Form.Label>
          <Form.Control type="password" placeholder="Confirm password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{width:"390px"}}>
          Create an account
        </Button>
        <Form.Text className="text-muted" style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
          Already have an account ? <b>Login here</b>
        </Form.Text>
      </Form>
    </div>
    </>
  )
}
