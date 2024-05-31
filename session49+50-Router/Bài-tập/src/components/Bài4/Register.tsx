import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Register() {
  return (
    <div>
      <h2>Bài 4</h2>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="text-center mb-4">Register</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-4">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
