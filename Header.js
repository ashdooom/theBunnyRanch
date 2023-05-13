import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
      <Navbar bg="dark" text="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#Home">theBunnyRanch</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="/AdoptionPage">Adoptions</Nav.Link>
            <Nav.Link href="/BunnyTreats">Bunny Treats</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            <Nav.Link href='/ContactUs'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default Header;