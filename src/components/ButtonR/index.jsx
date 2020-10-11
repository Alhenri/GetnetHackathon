import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton } from './styles';

function ButtonR({children, to}){
    return(
        <StyledButton as={Link} to={to} >
            {children}
        </StyledButton>
    )
}

export default ButtonR;
