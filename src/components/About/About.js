import React from 'react'
import { Container } from "react-bootstrap"
import "./About.css"
import { Image } from "react-bootstrap";
import icons from "../images/icons.png"
function About() {
    return (
        <Container style={{ marginTop: "35vh", textAlign: "left" }} >
            <h1 className='linear-wipe'> Always Curious.</h1>
            <div className="d-flex row " style={{ width: "23vw", marginTop: "1.4rem", color: "grey", flexWrap: "nowrap" }}>
                <Image src={icons} style={{ width: "350px" }} fluid></Image>

            </div>
            <h5 style={{ fontWeight: "300", marginTop: "2.8rem", fontSize: "16px" }}>I love building web experiences and have a knack to solve problems. I have been coding in CPP since class 11th and<br /> I think what made me stick around to pursue BTech in CSE would be the fact that there is logic behind everything.</h5>
        </Container>
    )
}

export default About