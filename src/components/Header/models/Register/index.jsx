import React from 'react';

import logo from '../../../../assets/logo.png';
import {
    HeaderContainer,
    HeaderTitleContainer,
    Title,
    ContentContainer,
} from '../../../HeaderRegister/styles.js';

function Header() {
    return(
        <HeaderContainer>
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
