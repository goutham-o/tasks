import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Container>
          <Nav>
            <LinkContainer to='/'>
              <Nav.Link>Task 1</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/task2'>
              <Nav.Link>Task 2</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/task3'>
              <Nav.Link>Task 3</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/task4'>
              <Nav.Link>Task 4</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
