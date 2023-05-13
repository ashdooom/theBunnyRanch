import React from "react";
import brownbun from '../apps/assets/brownbun.jpeg';
import { Container, Row, Col } from "reactstrap";
import '../main.css'


export default function HomePage({ mocha }) {
    return (
        <>
            <div className='header'>♡theBunnyRanch♡</div>
            <h4 className='introduction'>Welcome to theBunnyRanch, where you'll find adorable flop earred buns, big buns, small buns, stinky buns and sweet buns. Please feel free to peruse our selection of quality bunnies, they're going to hop right into your heart!  </h4>
            <Container>
                <Row>
                <Col xs='3'>
                    <img className="brownbun" src={brownbun} alt="Brown Bunny" />
                </Col>
                </Row>
            </Container>



        </>


    )
}

