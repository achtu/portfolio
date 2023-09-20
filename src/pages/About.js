import React from "react";
import portret from "../assets/IMG_8708.jpg";
import { Card, Col, ProgressBar, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function About() {
  const mothertongue = 100;
  const english = 80;
  const german = 50;
  return (
    <div className="about-wrp">
      <Card>
        <Card body>
          <img src={portret} alt="Marhatyta Tonchynska" className="prof-i" />
          <div className="about-portret-text">
            <h1 className="h1-name">Marharyta Tonchynska</h1>
            <div>
              <p className="frankfurt-mobil">
                +491707813592 • <br className="mail-br" />
                <a
                  style={{
                    textDecoration: "none",
                    padding: "0px 5px",
                    color: "#0DCAF0",
                  }}
                  href="mailto:tonchynska29@gmail.com"
                  rel="noopener noreferrer">
                  tonchynska29@gmail.com
                </a>
                <br className="from-br" />
                <br />
                <span className="italic" >
                  born in Kharkiv, Ukraine
                  <br />
                  based in Frankfurt, Germany
                </span>
               
              </p>
            </div>
          </div>
        </Card>
      </Card>
      <Row className="row-wrap">
        <Col sm={4} style={{ paddingRight: "30px" }}>
          <h2 className="h2-headers">Skills</h2>
          <ul className="skills-ul">
            <li>React</li>
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Tailwind</li>
            <li>Jest</li>
            <li>Figma</li>
            <li>React-Bootstrap</li>
          </ul>
          <h2 className="h2-headers">Languages</h2>
          <div className="language-wrp">
            Ukrainian
            <ProgressBar
              variant="info"
              now={mothertongue}
              label={`${mothertongue}%`}
            />
            Russian
            <ProgressBar
              variant="info"
              now={mothertongue}
              label={`${mothertongue}%`}
            />
            English
            <ProgressBar
              variant="warning"
              now={english}
              label={`${english}%`}
            />
            German
            <ProgressBar variant="warning" now={german} label={`${german}%`} />
          </div>{" "}
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

        <Col sm={8}>
          <h2 className="h2-headers">Work experience</h2>
          <h5 style={{ fontSize: "24px" }}>
            UX/UI Design Internship,{" "}
            <a
              href="https://www.l-one.de/"
              target="_blank"
              style={{ textDecoration: "none", color: "#0DCAF0" }}
              rel="noopener noreferrer">
              L-One Systems GmbH
            </a>
            , Darmstadt, Germany
          </h5>
          <p className="italic">April 2022 - August 2022</p>
          <ul>
            <li>Design of landing pages and the company's website</li>
            <li>Create plans and perform competitor analysis</li>
            <li>
              Creating adaptive designs for different devices for web pages
            </li>
            <li>Developing prototypes for web pages in Figma</li>
          </ul>
          <h2 className="h2-headers">Education</h2>
          <p style={{ fontSize: "24px" }}>
            O.M. Beketov National University of Urban Economy in Kharkiv{" "}
          </p>
          <p className="italic">September 2022 - Present</p>
          <p style={{ fontSize: "18px" }}>
            Master of Philology (Germanic Languages and Literatures)
          </p>
          <p style={{ fontSize: "24px" }}>
            O.M. Beketov National University of Urban Economy in Kharkiv{" "}
          </p>
          <p className="italic">September 2018 - August 2022</p>
          <p style={{ fontSize: "18px" }}>
            Bachelor of Philology (Germanic Languages and Luteratures)
          </p>
          <h2 className="h2-headers">Extra-curricular activities</h2>
          <p style={{ fontSize: "18px" }}>
            Membership in a charity public organization{" "}
            <a
              style={{ textDecoration: "none", color: "#0DCAF0" }}
              href="https://www.linkedin.com/company/jugendderukraine/?originalSubdomain=de"
              target="_blank"
              rel="noopener noreferrer">
              JDU. Jugend der Ukraine
            </a>
            , Frankfurt, Germany
          </p>
          <p className="italic">September 2023 - Present</p>
          <p>
            Participation in charity and volunteer projects, collecting funds
          </p>
        </Col>
      </Row>
      <hr className="hr-style-one" />
    </div>
  );
}
