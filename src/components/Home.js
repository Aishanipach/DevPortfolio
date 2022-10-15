import React from 'react'
import { Container } from 'react-bootstrap'
import CardGrids from './CardGrids';

function Home() {
  return (
    <Container className="text-light" style={{ marginTop: "30vh" }} >
      <h5> Hi I am Aishani ✌ </h5>
      <h5 style={{ fontWeight: "300" }}>I am a web developer & UX engineer</h5>

      <CardGrids />
    </Container>
  )
}

export default Home