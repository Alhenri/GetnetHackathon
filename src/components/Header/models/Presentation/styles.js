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
        margin: auto 0;
        font-size: 7vw;
        font-family: Bahiana;
    }

`;

export const ButtonArea = styled.div`
    width: 35vh;
`

export const PageInfoContainer = styled.div`
    display: flex;
    flex: 1;
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

export const Description = styled.div`
    font-family: 'Bahiana', cursive;
    display: flex;
    flex: 1;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    
    h1{
        margin: auto;
    }

`;
