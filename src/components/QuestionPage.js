import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function hideNoButton() {
    return `
        background-color: black;
        border: 1px solid black;
        cursor: none;
        color: black;
    `
}

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


class QuestionPage extends React.Component {
    render() {
        return (
            <div>
                <QuestionBox>
                    <h1>Are you looking for a developer?</h1>
                </QuestionBox>
                <ButtonBox>
                    <Link to="/yesPage"><YesButton>Yes</YesButton></Link>
                    <NoButton>No</NoButton>
                </ButtonBox>
            </div>
        )
    }
}

export default QuestionPage;