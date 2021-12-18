import React  from 'react'
import {useDispatch,useSelector}  from 'react-redux';
import {Navbar,Nav,Container,NavDropdown,Button ,FormControl}  from 'react-bootstrap' 

import {Link,useHistory} from 'react-router-dom';

import './Header.css'

export default function Header() {
 
  const dispatch =useDispatch()
  const history=useHistory();

  function logout(){
   dispatch(logout())
    history.push('./Login')
  }
  const name="Header"
    return (
        <Navbar className="nav"  expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/p_cat">ProductCat</Nav.Link>
              <Nav.Link as={Link} to="/Register">Register</Nav.Link>
              <Nav.Link as={Link} to="/Ref">Ref</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                 <Nav.Link as={Link} to="/Form">Form</Nav.Link>

                 <Nav.Link as={Link} to="/item_catagory">pcat</Nav.Link>
                 <Nav.Link as={Link} to="/Register2">Register</Nav.Link>
                 <Nav.Link as={Link} to="/Register1">RegForm</Nav.Link>
               <Nav.Link as={Link} to="/Product4">p4</Nav.Link>
               {/* <Nav.Link as={Link} to="/A">A</Nav.Link> */}
               <Nav.Link as={Link} to="/Reduce">Reduce</Nav.Link>
          
         <Button onClick={logout}>Logout</Button>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

