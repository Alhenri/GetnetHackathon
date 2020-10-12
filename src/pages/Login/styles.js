import styled from 'styled-components';

import Theme from '../../theme';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
`;

export const EmptySpace = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

export const MainContent = styled(EmptySpace)`
    justify-content: center;
`;

export const FigureContainer = styled(EmptySpace)`
    justify-content: flex-end;
    align-items: end;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const InputsContainer = styled(ImageContainer)`
    flex-direction: column;
`;

export const InfoContainer = styled(ImageContainer)`
    flex-direction: column;
`;

export const ButtonContainer = styled(ImageContainer)`
    background-color: transparent;
`;

export const Logo = styled.img`
    display: flex;
    flex: 1;
    min-height: 30vh;
    max-height: 70vh;
    max-width: 50%;
`;

export const Person = styled.img`
    display: flex;
    flex: 1;
    min-height: 10vh;
    max-height: 40vh;
    max-width: 35%;
    margin: 0 auto;
`;

export const Title = styled.p`
    margin: 0;
    font-size: 6vw;
    font-family: bahiana;
    color: ${Theme.colors.primary}
`;

export const Description = styled.p`
    margin: 0;
    font-size: 1.2vw;
    color: ${Theme.colors.primary}
`;

export const Button = styled.a`
    text-decoration: none;
    color: white;
    background-color: ${Theme.colors.primary};
    padding: 10px;
    border-radius: 20px;
    margin: 0px 5px;
    display: flex;
    width: 50%;
    align-items: center;
    justify-content: center;
`;

export const InvalidContent = styled.p`
    color: red;
`;
