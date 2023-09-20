import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="foot-wrp">
      <Container fluid="md">
        <Row>
          <Col>
            {" "}
            <a href="/" className="foot-link foot-name">
              Marharyta Tonchynska
            </a>
            <a href="/about" className="foot-link">
              About
            </a>
            <a href="/projects" className="foot-link">
              Projects
            </a>
            <a href="/contact" className="foot-link">
              Contact
            </a>
          </Col>

          <Col>
          {" "}
         <div className="social">
            <a
              className="foot-link"
              href="https://github.com/achtu"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillGithub size={"30px"} /> Github
            </a>
            <a
              className="foot-link"
              href="https://www.linkedin.com/in/margarytatonchynska2022/"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillLinkedin size={"30px"} /> LinkedIn
            </a>
        
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
