import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Register11() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/baitap11/login");
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} md={6} className="mx-auto">
            <h2 className="text-center mb-4">Create Account</h2>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mt-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-4">
                Create an account
              </Button>
              <span
                style={{
                  marginLeft: "130px",
                  padding: "30px",
                  position: "relative",
                  top: "30px",
                }}
              >
                Already have an account?
                <b onClick={handleLoginClick}>Login here</b>
              </span>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
