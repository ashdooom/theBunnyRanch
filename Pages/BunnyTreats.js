import React from 'react'
import { CardBody, Card, CardTitle, CardSubtitle, Button, Col, Row } from 'reactstrap'
import redBunnyTreats from '../apps/assets/redBunnyTreats.jpeg'
import { Navbar, NavbarBrand, NavLink, Nav } from 'react-bootstrap';


function Header() {
  return (
    <>
      <Navbar bg="dark" text="dark" variant="dark">

        <Navbar.Brand href="#Home">theBunnyRanch</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="/AdoptionPage">Adoptions</Nav.Link>
          <Nav.Link href="/BunnyTreats">Bunny Treats</Nav.Link>
          <Nav.Link href="/Cart">Cart</Nav.Link>
          <Nav.Link href='/ContactUs'>Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <br />

    </>
  );
}



export default function BunnyTreats() {
  return (
  
<>
<Row className='redbunnytreats row'>
        <Col xl={8}>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Oxbow Treats"
              src={redBunnyTreats} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
              Oxbow Simple Rewards Freeze-Dried Strawberry Bunny Treats
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
            Made from 100% freeze-dried strawberries, this is a healthy snack that your bun will come to love!
              </CardSubtitle>
              <Button>
                Add Treat!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </>
  )
};
