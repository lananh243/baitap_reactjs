import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import "./bai2.css"
export default function Bai2() {
  return (
    <div>
        <h1>Bài 2</h1>
        <InputGroup  id='input_1' size="sm" className="mb-3">
            <Form.Control
            aria-label="Input cỡ bé"
            aria-describedby="inputGroup-sizing-sm"
            placeholder='Input cỡ bé'
           
            />
        </InputGroup>
      <br />
      <InputGroup className="mb-3" id='input_1'>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Input cỡ trung bình'
        />
      </InputGroup>
      <br />
      <InputGroup size="lg" id='input_1'>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='In put cỡ lớn'
        />
      </InputGroup>
    </div>
  )
}
