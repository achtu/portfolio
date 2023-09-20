import React from 'react'
import Projects from '../pages/Projects'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Cooki from '../assets/bxs_cookie.svg'



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
   <>
   <Navbar expand="lg"  className="bg-body-tertiary"  bg="light" data-bs-theme="light">
   <Container>
    
        <Navbar.Brand href="/"><img src={Cooki} alt='cooki art'/> Marharyta Tonchynska</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
   </Navbar>

   <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </Router>
   </>
  )
}