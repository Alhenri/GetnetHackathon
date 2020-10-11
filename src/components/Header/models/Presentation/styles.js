import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: auto;
    background-color: #FF4628;
    padding: 0px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20vh;
    
    a{
        text-decoration: none;
    }
    
    h1#sigla{
        margin: 0;
        font-size: 4em;
        font-family: arya;
        color: white;
    }

    h4#significado{
        margin: 0;
        font-size: 0.8em;
        font-family: arya;
        color: white;
    }
    
`