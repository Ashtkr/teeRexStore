import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Navbar, Nav, Badge, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Header = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" expand="md" >
      <Navbar.Brand className="ml-5">
        <Link to="/" style={{ color: "white", textDecoration: 'none' }}>TeeRex Store</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end mr-5'>
        <Nav className='mr-3'>
          <Link to="/ " style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        </Nav>
        <Nav>
          <Link to="/cart">
            <Button variant='success'>
              <AiOutlineShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Button>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header