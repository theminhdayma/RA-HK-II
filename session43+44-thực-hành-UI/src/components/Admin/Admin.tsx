import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./admin.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

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
          <div className="dropdown-container" style={{ padding: "20px" }}>
            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="mb-3">
              <Dropdown.Toggle
                className="dark"
                variant="dark"
                id="dropdown-basic-1"
              >
                <i className="fa-brands fa-figma"></i>
                <span>Dashboard</span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-custom">
                <Dropdown.Item href="#/action-1-1">Option 1-1</Dropdown.Item>
                <Dropdown.Item href="#/action-1-2">Option 1-2</Dropdown.Item>
                <Dropdown.Item href="#/action-1-3">Option 1-3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="content-right">
          <Navbar className="bg-body-tertiary justify-content-between">
            <Form>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Form>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className=" mr-sm-2"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Navbar>
          <div className="list-price">
            <div className="total-sdires">
              <i className="fa-fontSize fa-solid fa-bag-shopping"></i>
              <div className="total">
                <span>Total sdires</span>
                <h3>$2,456</h3>
              </div>
            </div>
            <div className="total-sdires">
              <i className="fa-fontSize fa-solid fa-shop"></i>
              <div className="total">
                <span>Total sdires</span>
                <h3>$2,456</h3>
              </div>
            </div>
            <div className="total-sdires">
              <i className="fa-fontSize fa-solid fa-users"></i>
              <div className="total">
                <span>Total sdires</span>
                <h3>$2,456</h3>
              </div>
            </div>
            <div className="total-sdires">
              <i className="fa-fontSize fa-solid fa-list"></i>
              <div className="total">
                <span>Total sdires</span>
                <h3>$2,456</h3>
              </div>
            </div>
          </div>
          <div className="form">
            <h2>Form Title</h2>
            <span>
              Sed title, sed velit ridicuius ipsum pharetra lascus adio gravida
              augue enim
            </span>
            {["danger"].map((variant) => (
              <Alert key={variant} variant={variant}>
                This is a {variant} alert—check it out!
              </Alert>
            ))}
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                  <th>Table heading</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
