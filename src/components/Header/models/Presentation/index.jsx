import React from 'react';
import { Link } from 'react-router-dom'

import ButtonW from '../../../ButtonW';
import ButtonR from '../../../ButtonR';
import { StyledHeader } from './styles';

function Header(){
    return(
        <StyledHeader>
            <Link to="/">
                <h1 id="sigla">POE</h1>
                <h4 id="significado">Planejamento e organização para empreendedores</h4>
            </Link>
            <nav>
                <ButtonR>Mais informações</ButtonR>
                <ButtonR>Login</ButtonR>
                <ButtonW to="/Register">Cadastre-se</ButtonW>
            </nav>
        </StyledHeader>
    )
}

export default Header;
