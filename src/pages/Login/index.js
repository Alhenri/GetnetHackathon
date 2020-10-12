import React, { useState } from 'react';
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
    Button,
    Person,
    InvalidContent,
} from './styles';

function Register () {
    const [isInvalid, setInvalid] = useState(false);
    const [route, setRoute] = useState('/login');
    const loginEntrepreneur = 'empreendedor@gmail.com';
    const loginInvestor = 'investidor@gmail.com';

    const handleLogin = (value) => {
        if (value === loginEntrepreneur) {
            setRoute('/perfilJuridica');
        } else if (value === loginInvestor) {
            setRoute('/perfilFisica');
        }
    }

    const validate = () => {
        if (route === '/login') setInvalid(true);
    }

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
                        {isInvalid ? (
                            <InvalidContent>
                                Email Inválido: Por favor, insira um emial válido para continuar
                            </InvalidContent>
                        ) : null}                   
                        <Input id="teste" name='E-mail' getEmail={handleLogin} />
    
                        <Input name='senha' password />
                    </InputsContainer>

                    <ButtonContainer>
                        <Button
                          as={Link}
                          to={route}
                          onClick={validate}
                        >
                            Login
                        </Button>
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
