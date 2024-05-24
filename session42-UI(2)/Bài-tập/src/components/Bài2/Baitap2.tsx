import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Baitap2() {
  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <Form.Control
          placeholder="input cỡ nhỏ"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="input cỡ trung bình"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <Form.Control
          placeholder="input cỡ lớn"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
}
