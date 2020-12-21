import React,{useContext,useRef,useEffect,useState} from 'react'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavBar = ()=>{

    return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/profile" className="nav-link">Profile</Link>
          <Link to="/signin" className="nav-link">Sign In</Link>
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    )
}


export default NavBar