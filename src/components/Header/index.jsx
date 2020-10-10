import React from 'react'
import Styled from 'styled-components'
import Button from '../Button'

const StyledHeader = Styled.section`
    width: 100%;
    heigh: 154px;
    background-color: red;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
`

function Header(){
    return(
        <StyledHeader>
            <img/>
            <Button>Cadastre-se</Button>
        </StyledHeader>
    )
}

export default Header;