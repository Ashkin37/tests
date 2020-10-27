import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopHeader = () => {
	return (
		<topheader>
			<Navbar bg="dark" variant='dark' expand='lg' collapseOnSelect>
			<Container>
			 <Navbar.Brand href='/'> tests </Navbar.Brand>
			 <Navbar.Toggle aria-controls='basic-navbar-nav'/>
			 <Navbar.Collapse id='basic-navbar-nav'>
			  <Nav className='ml-auto'>
			   <Nav.Link href='/cart'> Cart</Nav.Link>
			   <Nav.Link href='/login'>Sign In</Nav.Link>
			  </Nav>
			 </Navbar.Collapse>
			 </Container>

			</Navbar> 
		</topheader>

		)
}

export default TopHeader