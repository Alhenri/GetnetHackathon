import React from 'react'
import {
    StyledCard,
} from './styles.js'

function Card({children, img}){
    return(
        <StyledCard>
            <img src={img} />
            <p>
                {children}
            </p>
        </StyledCard>
    )
}

export default Card;