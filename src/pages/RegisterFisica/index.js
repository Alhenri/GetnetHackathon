import React from 'react';
import PageDefault from '../../components/PageDefault';

import Input from '../../components/Input/index';
import { Container , PasswordContainer, AdjacentInfos } from './styles';
import { setImage } from './images';
import Button from '../../components/ButtonR'

function Register () {
    return(
        <PageDefault header headerModel="Register" text="Registo Investidor">
            <Container>
                <Input name='Nome Completo' icon={setImage('user')} />
                <Input name='E-Mail' icon={setImage('mail')} />
                <PasswordContainer>
                    <Input name='Digite sua senha' icon={setImage('key')} password/>
                    <Input name='Confirme sua senha' password />
                </PasswordContainer>
                <AdjacentInfos>
                    <Input name='Telefone' icon={setImage('phone')} />
                    <Input name='CPF' icon={setImage('id')} />
                </AdjacentInfos>
                <Button to="/Login" >Registrar</Button>
            </Container>
        </PageDefault>
    )
}

export default Register;
