import React from "react";
import "./admin.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

export default function Admin() {
  return (
    <div className="content-full">
      <div className="header">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Contents</Nav.Link>
              <Nav.Link href="#features">Categories</Nav.Link>
              <Nav.Link href="#pricing">Settings</Nav.Link>
            </Nav>
          </Container>
          <div className="admin">
            <img
              src="https://www.kindpng.com/picc/m/699-6997452_administrator-network-icons-system-avatar-computer-transparent-admin.png"
              alt=""
            />
            <span>Admin</span>
          </div>
        </Navbar>
      </div>
      <div className="content">
        <div className="list-option">
          <div className="new-item">+ New Item</div>
          <Form.Select size="lg">
            <option>Large select</option>
          </Form.Select>
          <Form.Select size="lg">
            <option>Large select</option>
          </Form.Select>
          <Form.Select size="lg">
            <option>Large select</option>
          </Form.Select>
          <Form.Select size="lg">
            <option>Large select</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
}
