import styled from 'styled-components';

import Theme from '../../theme';
import { StyledButton } from '../../components/ButtonW/styles';

export const Container = styled.div`
    min-width: 60%;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const AdjacentInfos = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PasswordContainer = AdjacentInfos;

export const ButtonContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Button = styled(StyledButton)`
    max-width: 30%;
    max-height: 50%;
    background-color: ${Theme.colors.primary};
`;

export const ButtonContent = styled.p`
    color: white;
`;
