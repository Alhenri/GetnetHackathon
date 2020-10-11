import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../../../assets/logo.png';
import {
    HeaderContainer,
    HeaderTitleContainer,
    Title,
    ContentContainer,
} from './styles.js';

function Header() {
    return(
        <HeaderContainer as={Link} to="/">
            <ContentContainer>
                <img src={logo} alt='logo' />
                <HeaderTitleContainer>
                    <Title>Registro</Title>
                </HeaderTitleContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

export default Header;
