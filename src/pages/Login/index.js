import React from 'react';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/ButtonR'
import {Container, ButtonArea} from './styles.js'


function Login() {
    return(
        <PageDefault header headerModel="Register" text="Login">
            <Container>
                <ButtonArea>
                    <Button to="/LoginJuridica" >Empreendedor</Button>
                </ButtonArea>
                <ButtonArea>
                    <Button to="/LoginFisica" >Investidor</Button>
                </ButtonArea>
            </Container>
        </PageDefault>
    )
}

export default Login;
