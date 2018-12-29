import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import YesPage from './YesPage';

function hideNoButton() {
    return `
        background-color: black;
        border: 1px solid black;
        cursor: none;
        color: black;
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
    text-decoration: none;
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
    text-decoration: none;
    color: white;
    :hover {
        background-color: gray;
        text-decoration: none;
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
                    <Link to="/yesPage"><YesButton>Yes</YesButton></Link>
                    <NoButton>No</NoButton>
                </ButtonBox>
                <Route exact path="/" />
                <Route path="/yesPage" component={YesPage} />
            </Container>
            
        );
    }
}

export default App;