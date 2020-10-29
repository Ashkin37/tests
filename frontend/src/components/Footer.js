import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'


const Footer = () => {
  return (
    <footer>
       <Navbar bg='success' variant='dark' expand='lg' collapseOnSelect>
      <Container>
        <Row>
          <Col className='text-center py-3'> DON'T SELL MY PERSONAL INFORMATION </Col>
        </Row>
      </Container>
      </Navbar>
    </footer>
  )
}

export default Footer
