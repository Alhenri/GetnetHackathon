import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

import Input from '../../components/Input/index';
import { setImage } from '../../utils/handleImages';
import {
    Container,
    PasswordContainer,
    AdjacentInfos,
    Button,
    ButtonContainer,
    ButtonContent,
} from './styles';

function Register () {
    return(
        <PageDefault header headerModel="Register" text="Registro Empreendedor" >
            <Container>
                <Input name='Nome da Empresa' icon={setImage('user')} />
                <Input name='E-Mail' icon={setImage('mail')} />
                <PasswordContainer>
                    <Input name='Digite sua senha' icon={setImage('key')} password/>
                    <Input name='Confirme sua senha' password />
                </PasswordContainer>
                <AdjacentInfos>
                    <Input name='Telefone' icon={setImage('phone')} />
                    <Input name='CNPJ' icon={setImage('id')} />
                </AdjacentInfos>

                <ButtonContainer>
                    <Button as={Link} to="/Login">
                        <ButtonContent>Registrar</ButtonContent>
                    </Button>
                </ButtonContainer>
            </Container>
        </PageDefault>
    )
}

export default Register;
