import styled from 'styled-components';

import Theme from '../../theme';

export const StyledButton = styled.a`
    text-decoration: none;
    color: ${Theme.colors.primary};
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    height: 2vh;

    img{
        height: 3vh;
        margin-right: 1vh;
    }
`;

export const TextContent = styled.p`
    font-size: 1.8vw;
    text-align: center;
`;
