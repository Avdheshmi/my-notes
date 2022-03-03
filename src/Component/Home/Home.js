import React from "react";
import { Container } from "react-bootstrap";
import Addnote from "../Addnote/Addnote";
import Note from "../note/Note";

const Home = () => {
    return (
        <>
            <Container className="mt-3">
                <Addnote />
            </Container>
            <Note />
        </>



    )
};
export default Home;
