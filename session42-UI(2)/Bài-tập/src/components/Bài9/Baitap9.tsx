import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Baitap9() {
  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h1 className="text-center">Sign Up</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control as="select">
                  <option>Choose your address...</option>
                  <option value="address1">Address 1</option>
                  <option value="address2">Address 2</option>
                  <option value="address3">Address 3</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to the Terms and Conditions"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
