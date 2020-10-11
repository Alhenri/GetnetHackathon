import styled from 'styled-components';

import Theme from '../../theme';

export const HeaderContainer = styled.div`
    min-height: 200px;
    padding-top: 10px;
    background-color: ${Theme.colors.primary};
    display: flex;
    flex: 1;
    justify-content: center;
    border-bottom-left-radius: 150px;
`;

export const ContentContainer = styled.div`
    width: 160px;
`;

export const HeaderTitleContainer = styled.div`
    display: flex;
    margin-top: -35px;
`;

export const Title = styled.h1`
    font-family: 'Bahiana', cursive;
    color: white;
    font-size: 30px;
    margin-left: auto;
`;
