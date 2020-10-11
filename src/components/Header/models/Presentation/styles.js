import styled from 'styled-components';

export const StyledHeader = styled.div`
    width: auto;
    background-color: #FF4628;
    padding: 0px 25px;
    display: flex;
    flex: 1;
    height: 20vh;
    
    a{
        text-decoration: none;
    }
    
    #sigla{
        margin: 0;
        font-size: 7vw;
        font-family: arya;
    }

    #significado{
        margin: 0;
        font-size: 1.7vw;
        color: white;
    }
`;

export const PageInfoContainer = styled.div`
    display: flex;
    flex: 3;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const ButtonsGroup = styled.nav`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Initials = styled.h1`
    color: white;
`;

export const Description = styled.p`
    font-family: 'Bahiana', cursive;
    display: flex;
    flex: 1;
    margin-top: auto;
`;
