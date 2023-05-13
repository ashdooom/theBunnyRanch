import React from 'react'
import BunnyRescue from './BunnyRescue'
import HomePage from './HomePage'
import { CardBody, Card, CardTitle, CardSubtitle, CardText, Button, Col, Row, ModalHeader, ModalBody } from 'reactstrap'
import { ModalFooter, ModalTitle, Stack } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import sunglassesBun from '../apps/assets/sunglassesBun.jpg';
import flowerBun from '../apps/assets/flowerBun.jpg'
import backpackBun from '../apps/assets/backpackBun.jpg'
import blondeBun from '../apps/assets/blondeBun.jpg'
import blueEyedBun from '../apps/assets/blueEyedBun.jpg'
import brownBun from '../apps/assets/brownbun.jpeg'
import cornBun from '../apps/assets/cornBun.jpg'
import donutBun from '../apps/assets/donutBun.jpg'
import hatBun from '../apps/assets/hatBun.jpg'
import '../main.css'
import { Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react'


const AdoptionPage = ({ bunList }) => {
  const [modalOpen, setModalOpen] = useState(false);


const handleClick = () => {
  setModalOpen(bunList)
}

  const handleSubmit = () => {
    const buns = {
      bunList: parseInt(bunList),
      id: 0,
      price: '$50'
    }
    console.log(buns);
    setModalOpen(false)
  };

<div
  className="d-flex align-items-center justify-content-center"
  style={{ height: "100vh" }}
>
  <Button variant="primary" onClick={addBun}>
    Bun added!
  </Button>
  <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Bun Cart
                </ModalHeader>
                <ModalBody>
                    <Formik
                        validate={validateCommentForm}
                        initialValues={{
                            rating: undefined,
                            author: '',
                            commentText: ''
                        }}
                        onSubmit={handleSubmit}
                    >

                        <Form>
                            <FormGroup>
                                <Label htmlFor={'rating'}>
                                    Rating
                                </Label>
                              
                                <ErrorMessage name={'rating'}>
                                    {(msg) => <p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Label htmlFor={'author'}>
                                Your Name
                            </Label>
                            <Field
                                name='author'
                                placeholder='Your Name'
                                className='form-control'
                            />
                            <ErrorMessage name={'author'}>
                                {(msg) => <p className='text-danger'>{msg}</p>}
                            </ErrorMessage>
                            <FormGroup>
                                <Label htmlFor={'commentText'}>
                                    Comment
                                </Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                            <FormGroup>
                            </FormGroup>
                        </Form>

                    </Formik>
                </ModalBody>
            </Modal>

</div>


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


export default function AdoptionPage() {
  return (

    <Container>

      <h3>{BunnyRescue}</h3>

      <Row className='mocha row'>
        <Col xl={8}>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Bun with Sunglasses"
              src={sunglassesBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Mocha
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Californian Bun
              </CardSubtitle>
              <Button onClick={addBun}>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <>

        <h3>{BunnyRescue}</h3>
        <Row className='flowers row'>
          <Col>
            <Card
              style={{
                width: '18rem'
              }}
            >
              <img
                alt="Bun with Flowers"
                src={flowerBun} />
              <CardBody className='CardBody'>
                <CardTitle tag="h5">
                  Melody
                </CardTitle>
                <CardSubtitle
                  className="mb-2 text-muted"
                  tag="h6"
                >
                  Rex Bun
                </CardSubtitle>
                <Button>
                  Add Bun!
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </>



      <h3>{BunnyRescue}</h3>

      <Row className='backpack row'>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Bun with backpack"
              src={backpackBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Cupcake
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Fluffy Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>

        </Col>
      </Row>


      <h3>{BunnyRescue}</h3>

      <Row className='donut'>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt=" Blonde Bun"
              src={blondeBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Donut
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Holland Lop Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>







      <h3>{BunnyRescue}</h3>

      <Row className='bruiser'>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Brown Bun"
              src={brownBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Billie
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Holland Lop Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>



      <h3>{BunnyRescue}</h3>

      <Row className='leon'>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Bun with Corn"
              src={cornBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Leon
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                American Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>


      <h3>{BunnyRescue}</h3>

      <Row className='princess'>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Bun with Donut"
              src={donutBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Princess
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                English Lop Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>



      <h3>{BunnyRescue}</h3>

      <Row>
        <Col>
          <Card
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Bun with Hat"
              src={hatBun} />
            <CardBody className='CardBody'>
              <CardTitle tag="h5">
                Bruiser
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                English Lop Bun
              </CardSubtitle>
              <Button>
                Add Bun!
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>



  )
}

};

