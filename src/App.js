import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    width: 100vw;
    color: white;
`
const ButtonBox = styled.div`
    width: 10vw;
    display: flex;
    justify-content: space-between;
`

class App extends Component {
    render() {
        return (
            <Container>
                <h1>Are you looking for a developer?</h1>
                <ButtonBox>
                    <Button color="success">Yes</Button>
                    <Button color="danger">No</Button>
                </ButtonBox>
            </Container>
        );
    }
}

export default App;