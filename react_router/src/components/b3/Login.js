"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_bootstrap_1 = require("react-bootstrap");
function Login() {
    return (<>
        <div style={{ width: "700px", height: "380px", border: "1px solid grey", margin: "auto", marginTop: "160px" }}>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Login account</h1>
            <react_bootstrap_1.Form style={{ paddingLeft: "30px" }}>
                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicEmail">
                    <react_bootstrap_1.Form.Label>Email address</react_bootstrap_1.Form.Label>
                    <react_bootstrap_1.Form.Control style={{ width: "635px" }} type="email" placeholder="Enter email"/>
                </react_bootstrap_1.Form.Group>

                <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword">
                    <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
                    <react_bootstrap_1.Form.Control style={{ width: "635px" }} type="password" placeholder="Password"/>
                </react_bootstrap_1.Form.Group>
                <react_bootstrap_1.Button style={{ width: "635px" }} variant="primary" type="submit">
                    Login an account
                </react_bootstrap_1.Button>
                <react_bootstrap_1.Form.Text className="text-muted" style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
                    Already have an account ? <b>Register here</b>
                </react_bootstrap_1.Form.Text>
            </react_bootstrap_1.Form>
        </div>
    </>);
}
exports.default = Login;
