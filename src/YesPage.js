import React from 'react';
import styled from 'styled-components';

const Container2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: black;
    height: 100vh;
    width: 100vw;
    color: white;
`

class YesPage extends React.Component {
    render() {
        return (
            <Container2>
                <h1>Awesome, your search has ended!</h1>
            </Container2>
            
        );
    }
}

export default YesPage;