import React from 'react'
import { Container, Image } from "react-bootstrap"
import headimg from "../images/golimitless.png";
import ListBlog from './ListBlog';

function Blog(props) {
    return (
        <Container style={{ marginTop: "15vh" }}>
            <Image src={headimg} fluid />
            <hr />
            <ListBlog articles={props.articles} />


        </Container>
    )
}

export default Blog