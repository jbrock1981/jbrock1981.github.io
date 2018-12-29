import React, { Component } from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import YesPage from './components/YesPage';
import QuestionPage from './components/QuestionPage';


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



class App extends Component {
    render() {
        return (
            <div>
            <Container>
                <QuestionPage />   
            </Container>
            <Route exact path="/" component={QuestionPage} />
            <Route path="/yesPage" component={YesPage} />
            </div>
        );
    }
}

export default App;