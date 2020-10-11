import React from 'react';

import ButtonW from '../../../ButtonW';
import ButtonR from '../../../ButtonR';
import { StyledHeader } from './styles';

function Header(){
    return(
        <StyledHeader>
            <div>
                <h1 id="sigla">POE</h1>
                <h4 id="significado">Planejamento e organização para empreendedores</h4>
            </div>
            <nav>
                <ButtonR>Mais informações</ButtonR>
                <ButtonR>Login</ButtonR>
                <ButtonW>Cadastre-se</ButtonW>
            </nav>
        </StyledHeader>
    )
}

export default Header;
