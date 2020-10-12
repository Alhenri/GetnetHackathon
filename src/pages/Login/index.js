import React from 'react';
import PageDefault from '../../components/PageDefault';

import logo from '../../assets/logo.png';
import person from '../../assets/person.png';
import Input from '../../components/Input/index';
import { Link } from 'react-router-dom'

import {
    Container ,
    EmptySpace,
    MainContent,
    FigureContainer,
    ImageContainer,
    InputsContainer,
    InfoContainer,
    ButtonContainer,
    Logo,
    Title,
    Description,
    Button,
    Person,
} from './styles';

function Register () {
    return(
        <PageDefault>
            <Container>
                <EmptySpace />

                <MainContent>
                    <ImageContainer>
                        <Logo src={logo} alt="logo" />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>Click Pago</Title>
                    </InfoContainer>
    
                    <InputsContainer>                    
                        <Input name='Nome / E-mail' />
                        <Input name='senha' />
                    </InputsContainer>

                    <ButtonContainer>
                        <Button as={Link} to="/PerfilJuridica">Login</Button>
                    </ButtonContainer>
                </MainContent>

                <FigureContainer>
                    <Person src={person} alt="person" />
                </FigureContainer>
            </Container>
        </PageDefault>
    )
}

export default Register;
