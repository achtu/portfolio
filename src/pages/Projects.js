import React from "react";
import { TiWeatherDownpour } from "react-icons/ti";
import { FaGamepad } from "react-icons/fa";
import { BiRestaurant } from "react-icons/bi";
import pro1 from "../assets/pro1.png";
import pro3 from "../assets/pro3.png";
import pro2 from "../assets/pro2.png";
import { Card } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          paddingBottom:"5vh"
        }}>
        Projects
      </h1>

      <div className="card-wrap-pro">
        <Card className="pro-card">
          <Card.Body>
          <a href="https://majestic-gelato-7f2f1e.netlify.app" target="_blank" rel="noopener noreferrer"> <img src={pro1} className="project-i" alt="first project" /></a>
            <div>
              <h3>
                {" "}
                Weather App
                <TiWeatherDownpour />
              </h3>
              The web-site was created to view the current weather forecast. It
              is also possible to view the weather at the place where you are at
              the moment. The site was written using the React framework and
              React Bootstrap.
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="pro-card">
          <Card.Body>
          <a href="https://cool-daffodil-f619f5.netlify.app" target="_blank" rel="noopener noreferrer">  <img src={pro3} className="project-i" alt="secons project" /></a>
            <div>
              <h3>
                {" "}
                Little game
                <FaGamepad />
               
              </h3>
              A simple game written using CSS with minimal use of JavaScript. in
              this game you can enter your nickname. Ant will collect coins and
              must jump over stumps otherwise he will los
            </div>
          </Card.Body>
        </Card>
        <br />
        <Card className="pro-card">
          <Card.Body>
          <a href="https://poetic-chimera-d54113.netlify.app" target="_blank" rel="noopener noreferrer"> <img src={pro2} className="project-i" alt="third project" /></a>{" "}
            <div>
              <h3>
                {" "}
                Restaurant Website and menu
                <BiRestaurant />
              </h3>
              This site is also written with mimimal use of JavaScript, but it
              is a fully functioning site where you can view menus, drinks and
              prices, go to the restaurant's website and make a reservation. All
              sites are adapted for mobile devices
            </div>
          </Card.Body>
        </Card>
        <br />
      </div>
    </>
  );
}
