import styled from 'styled-components';

export const StyledButton = styled.a`
    text-decoration: none;
    color: white;
    width: auto;
    background-color: #FF4628;
    padding: 10px;
    border-radius: 50px;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: ${({ condition }) => (condition ? '2' : '1') };
`;

export const TextContent = styled.p`
    font-size: 1.4vw;
    text-align: center;
`;
