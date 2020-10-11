import styled from 'styled-components';

import Theme from '../../theme';

export const HeaderContainer = styled.div`
    height: 200px;
    margin-top: -20px;
    background-color: ${Theme.colors.primary};
    display: flex;
    flex: 1;
    flex-direction: row;
    border-bottom-left-radius: 100px;
`;

export const HeaderInfoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const Initials = styled.h1`
    color: ${Theme.colors.primary};
    font-family: Arya;
    font-size: 60px;
    margin: 0px;
`;
