import { Button, Form } from "react-bootstrap"


function Login() {
  return (
    <>
        <div style={{width:"700px", height:"380px", border: "1px solid grey", margin:"auto", marginTop:"160px"}}>
            <h1 style={{display:"flex", justifyContent:"center"}}>Login account</h1>
            <Form style={{paddingLeft: "30px"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control style={{width:"635px"}} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control style={{width:"635px"}} type="password" placeholder="Password" />
                </Form.Group>
                <Button style={{width:"635px"}} variant="primary" type="submit">
                    Login an account
                </Button>
                <Form.Text className="text-muted" style={{display:'flex', justifyContent:'center', marginTop:"30px"}}>
                    Already have an account ? <b>Register here</b>
                </Form.Text>
            </Form>
        </div>
    </>
  )
}

export default Login