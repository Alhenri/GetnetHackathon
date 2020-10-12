import React from 'react';
import { Link } from 'react-router-dom'

import ButtonW from '../../../ButtonW';
import ButtonR from '../../../ButtonR';
import Poligon from '../../assets/Polygon.svg'
import {
    StyledHeader,
    Initials,
    Description,
    PageInfoContainer,
    ButtonsContainer,
    ButtonsGroup,
    ButtonArea,
} from './styles';

function buttonGroup(type){
    if(type==="Home"){
        return(
            <ButtonsGroup>
                <ButtonR greater>Mais informações</ButtonR>
                <ButtonR to="/Login">Login</ButtonR>
                <ButtonW to="/Register">Cadastre-se</ButtonW>
            </ButtonsGroup>
        )
    }
    if(type==="Perfil"){
        return(
            <ButtonsGroup>
                <ButtonArea>
                    <ButtonW to="/Register" img={Poligon} >
                        <h3>ao vivo</h3>
                    </ButtonW>
                </ButtonArea>
            </ButtonsGroup>
        )
    }
}

function Header({type}){
    return(
        <StyledHeader>
            <PageInfoContainer>
                <Link to="/" style={{ display: 'flex', flex: 1, flexDirection: 'column' }}> 
                    <Initials id="sigla">Click Pago</Initials>
                </Link>
            </PageInfoContainer>

            <ButtonsContainer>
                {buttonGroup(type)}
            </ButtonsContainer>

        </StyledHeader>
    )
}

export default Header;
