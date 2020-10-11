import React from 'react';
import { Link } from 'react-router-dom'

import ButtonW from '../../../ButtonW';
import ButtonR from '../../../ButtonR';
import {
    StyledHeader,
    Initials,
    Description,
    PageInfoContainer,
    ButtonsContainer,
    ButtonsGroup,
} from './styles';

function Header(){
    return(
        <StyledHeader>
            <PageInfoContainer>
                <Link to="/" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

                    <Initials id="sigla">POE</Initials>
                    <Description id="significado">
                        Planejamento e organização para empreendedores
                    </Description>

                </Link>
            </PageInfoContainer>

            <ButtonsContainer>
                <ButtonsGroup>
                    <ButtonR greater>Mais informações</ButtonR>
                    <ButtonR>Login</ButtonR>
                    <ButtonW to="/Register">Cadastre-se</ButtonW>
                </ButtonsGroup>
            </ButtonsContainer>

        </StyledHeader>
    )
}

export default Header;
