import styled from 'styled-components';

import Theme from '../../theme';
import { StyledButton } from '../../components/ButtonW/styles';

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    max-width: 95%;
    margin-top: 20px;
`;

export const AdjacentInfos = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const PlusButton = styled(StyledButton)`
    background-color: ${Theme.colors.primary};
    max-width: 15%;
    height: 4vh;
`;

export const TextContent = styled.p`
    color: white;
    text-align: center;
    padding: 15px;
`;

export const Message = styled.p`
    color: red;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
`;
