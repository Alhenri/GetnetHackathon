import React from 'react'

import {
    StyledCard,
    TextContent,
    ImageContainer,
    InfoContainer,
    InfoButtonContainer,
    InfoImageContainer,
    TextContainer,
    CardImg,
    DescImage,
    PlusButton,
} from './styles';

function Card({ children, img, descImg }){
    return(
        <StyledCard>
            <ImageContainer>
                {img ? <CardImg src={img} alt="card" /> : null}
            </ImageContainer>

            <InfoContainer>

                {descImg ? (
                    <InfoImageContainer>
                        <DescImage src={descImg} alt='descImg' />
                    </InfoImageContainer>
                ) : null}

                <TextContainer>
                    <TextContent>{children}</TextContent>
                </TextContainer>
                
                <InfoButtonContainer>
                    <PlusButton>
                        <TextContent primary>Saiba Mais</TextContent>
                    </PlusButton>
                </InfoButtonContainer>
            </InfoContainer>
        </StyledCard>
    )
}

export default Card;