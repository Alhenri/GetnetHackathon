import React from 'react';
import PageDefault from '../../components/PageDefault';
import Button from '../../components/ButtonR'
import {Container, ButtonArea} from './styles.js'


function Register() {
    return(
        <PageDefault header headerModel="Register">
            <Container>
                <ButtonArea>
                    <Button to="/RegisterJuridica" >Empreendedor</Button>
                </ButtonArea>
                <ButtonArea>
                    <Button to="/RegisterFisica" >Investidor</Button>
                </ButtonArea>
            </Container>
        </PageDefault>
    )
}

export default Register;
