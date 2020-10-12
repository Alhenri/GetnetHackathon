import React from 'react';
import { Link } from 'react-router-dom';

import { StyledButton,TextContent } from './styles';

function ButtonW({children, to, img }){
    return(
        <StyledButton as={Link} to={to} >
            <img src={img} />
            <TextContent>
                {children}
            </TextContent>
        </StyledButton>
    )
}

export default ButtonW;
