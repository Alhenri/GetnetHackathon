import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton,TextContent } from './styles';

function ButtonW({children, to }){
    return(
        <StyledButton as={Link} to={to} >
            <TextContent>
                {children}
            </TextContent>
        </StyledButton>
    )
}

export default ButtonW;
