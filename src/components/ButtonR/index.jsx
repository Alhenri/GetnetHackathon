import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton, TextContent } from './styles';

function ButtonR({children, to, greater }){
    return(
        <StyledButton as={Link} to={to} condition={greater} >
            <TextContent>
                {children}
            </TextContent>
        </StyledButton>
    )
}

export default ButtonR;
