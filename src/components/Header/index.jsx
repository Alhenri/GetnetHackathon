import React from 'react'
import Styled from 'styled-components'
import ButtonW from '../ButtonW'
import ButtonR from '../ButtonR'

const StyledHeader = Styled.div`
    width: auto;
    background-color: #FF4628;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    div h1#sigla{
        margin: 0;
        font-size: 4em;
        font-family: arya;
        color: white;
    }

    div h4#significado{
        margin: 0;
        font-size: 0.8em;
        font-family: arya;
        color: white;
    }
    
`

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