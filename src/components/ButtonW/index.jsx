import React from 'react'
import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = Styled.a`
    text-decoration: none;
    color: #FF4628;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    margin: 0px 5px;
`

function ButtonW({children, to}){
    return(
        <StyledButton as={Link} to={to} >
            {children}
        </StyledButton>
    )
}

export default ButtonW;