"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
function Register() {
    return (<>
    <div style={{ width: "450px", height: "450px", border: "1px solid grey", margin: "auto", marginTop: "130px" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Create account</h1>
      <react_bootstrap_1.Form style={{ paddingLeft: "30px" }}>
        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: "390px" }}>
          <react_bootstrap_1.Form.Label>Email address</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="email" placeholder="Enter email"/>
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: "390px" }}>
          <react_bootstrap_1.Form.Label>Password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Password"/>
        </react_bootstrap_1.Form.Group>

        <react_bootstrap_1.Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: "390px" }}>
          <react_bootstrap_1.Form.Label>Confirm password</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="password" placeholder="Confirm password"/>
        </react_bootstrap_1.Form.Group>
        <react_bootstrap_1.Button variant="primary" type="submit" style={{ width: "390px" }}>
          Create an account
        </react_bootstrap_1.Button>
        <react_bootstrap_1.Form.Text className="text-muted" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          Already have an account ? <b>Login here</b>
        </react_bootstrap_1.Form.Text>
      </react_bootstrap_1.Form>
    </div>
    </>);
}
exports.default = Register;
