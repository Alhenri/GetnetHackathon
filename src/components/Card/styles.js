import styled from 'styled-components';

import { StyledButton } from '../ButtonW/styles';
import Theme from '../../theme';

export const StyledCard = styled.a`
    display: flex;
    flex: 1;
    flex-direction: row;
    max-width: 49%;
    background-color: ${Theme.colors.cardColor};
`;

export const InfoContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const TextContainer = styled.div`
    display: flex;
    flex: 2;
`;

export const InfoImageContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const InfoButtonContainer = InfoImageContainer;

export const TextContent = styled.p`
    background-color: ${({ primary }) => primary ? Theme.colors.primary : Theme.colors.cardColor};
    font-size: 2.2vw;
    text-align: center;
    color: white;
    p {
        margin: 2px;
    }
`;

export const DescImage = styled.img`
    display: flex;
    flex: 1;
    min-height: 14vh;
    max-height: 40vh;
    max-width: 80%;
`;

export const CardImg = styled.img`
    display: flex;
    flex: 1;
    height: 100%;
    max-width: 100%;
`;

export const PlusButton = styled(StyledButton)`
    background-color: ${Theme.colors.primary};
`;
