import React from 'react';
import { Link } from 'react-router-dom'

import logo from '../../../../assets/logo.png';
import {
    HeaderContainer,
    HeaderTitleContainer,
    Title,
    ContentContainer,
} from './styles.js';

function Header({text}) {
    return(
        <HeaderContainer as={Link} to="/">
            <ContentContainer>
                <img src={logo} alt='logo' />
                <HeaderTitleContainer>
                    <Title> {text} </Title>
                </HeaderTitleContainer>
            </ContentContainer>
        </HeaderContainer>
    )
}

export default Header;
