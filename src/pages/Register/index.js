import React from 'react';
import PageDefault from '../../components/PageDefault';

import Input from '../../components/Input/index';
import { Container , PasswordContainer, AdjacentInfos } from './styles';
import { setImage } from './images';

function Register () {
    return(
        <PageDefault header headerModel="Register">
            <Container>
                <Input name='Nome Completo' icon={setImage('user')} />
                <Input name='E-Mail' icon={setImage('mail')} />
                <PasswordContainer>
                    <Input name='Digite sua senha' icon={setImage('key')} password/>
                    <Input name='Confirme sua senha' password />
                </PasswordContainer>
                <AdjacentInfos>
                    <Input name='Telefone' icon={setImage('phone')} />
                    <Input name='Identidade' icon={setImage('id')} />
                </AdjacentInfos>
            </Container>
        </PageDefault>
    )
}

export default Register;
