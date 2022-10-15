import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Card, Col, Image } from "react-bootstrap";
import "./Home.css"
import omdb from "../components/images/proj1.png"
import pic from "../components/images/pic.png"
import CardGrids from './CardGrids';

function Home() {
  return (
    <Container className="text-light" style={{ marginTop: "30vh" }} >
      <h5> Hi I am Aishani ✌ </h5>
      <h5 style={{ fontWeight: "300" }}>I am a web developer & UX engineer</h5>
      {/* <Container style={{ width: "50vw", justifyContent: "center" }} className="my-5 d-flex">
        <div className='closure'> <Card style={{ width: "23vw", height: "54vh", margin: "0.5rem" }}></Card></div>
        <div className='closure'><Card style={{ width: "23vw", height: "54vh", margin: "0.5rem" }}></Card></div>
      </Container> */}
      <CardGrids />
    </Container>
  )
}

export default Home