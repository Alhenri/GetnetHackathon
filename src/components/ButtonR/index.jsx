import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = Styled.a`
    text-decoration: none;
    color: white;
    background-color: #FF4628;
    padding: 10px;
    border-radius: 10px;
    margin: 0px 5px;
`

function ButtonR({children, to}){
    return(
        <StyledButton as={Link} to={to} >
            {children}
        </StyledButton>
    )
}

export default ButtonR;