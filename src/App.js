import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function hideNoButton() {
    return `
        background-color: black;
        border: 1px solid black;
        cursor: none;
        color: black;
        ${NoButton.textContent = "Yes!"}
    `
    
}

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
const QuestionBox = styled.div`
    width: 70vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const ButtonBox = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
`
const YesButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 40px;
    background-color: charcoal;
    border-radius: 15%;
    border: 1px solid gray;
    cursor: pointer;
    :hover {
        background-color: gray;
    }    
`
let NoButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width 50px;
    height: 40px;
    background-color: charcoal;
    border-radius: 15%;
    border: 1px solid gray;
    cursor: pointer;
    &:hover {
        ${hideNoButton};
    }
`


class App extends Component {
    render() {
        return (
            <Container>
                <QuestionBox>
                    <h1>Are you looking for a developer?</h1>
                </QuestionBox>
                <ButtonBox>
                    <YesButton>Yes</YesButton>
                    <NoButton>No</NoButton>
                </ButtonBox>
            </Container>
        );
    }
}

export default App;