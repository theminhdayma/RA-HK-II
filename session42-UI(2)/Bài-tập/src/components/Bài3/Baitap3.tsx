import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Baitap3() {
  return (
    <div className="flex gap-6">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.tgdd.vn/Files/2019/08/08/1185319/10_800x450.jpg"
        />
        <Card.Body>
          <Card.Title>MacBook Air 2018</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Xem chi tiết</Button>
          <span className="ml-10">30.000.000 đ</span>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://tse1.mm.bing.net/th?id=OIP.jnoyoTqzhiFCYCu2BJYbUAAAAA&pid=Api&rs=1&c=1&qlt=95&w=189&h=124"
        />
        <Card.Body>
          <Card.Title>MacBook Pro 2019</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Xem chi tiết</Button>
          <span className="ml-10">30.000.000 đ</span>
        </Card.Body>
      </Card>
    </div>
  );
}
