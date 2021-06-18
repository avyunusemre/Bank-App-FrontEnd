import React from "react";
import { Card, Button } from "react-bootstrap";

import "./Footer.css";

function CopyRight() {
  const yil = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {yil}</p>
    </footer>
  );
}

function Kart() {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="cardB">
        <Card.Body>
          <Card.Title>Contact Us</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="cardButton" variant="outline-dark">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <div className="footerC ">
        <Kart />
        <Kart />
        <Kart />
        <Kart />
        <Kart />
      </div>
      <CopyRight />
    </div>
  );
}

export default Footer;
