import React, { Component } from "react";
import { Navbar, Col, Container } from "react-bootstrap";

function Footer(props) {
  let fullYear = new Date().getFullYear();
  return (
    // position="bottom"
    <Navbar  position="bottom"className="" sticky="bottom" bg="dark" varient="dark">
      <Container>
        <Col lg={12} className="text-center text-white">
          <div>
            All Rights Reserved. &copy; Copyright {fullYear}-{fullYear + 1}{" "}
          </div>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
