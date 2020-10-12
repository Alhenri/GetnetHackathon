import React from 'react';
import PageDefault from '../../components/PageDefault';

import Input from '../../components/Input/index';
import { Container, AdjacentInfos } from './styles';
import { setImage } from './images';
import Button from '../../components/ButtonR'

function QueroCredito() {
    return(
        <PageDefault header headerModel="Register" text="Quero Credito" >
            <Container>
                <Input name='Descrição' icon={setImage('mala')} />
                <Input name='Codigo do boleto' icon={setImage('carrinho')} />
                <AdjacentInfos>
                    <Input name='Data de retorno' icon={setImage('calendar')} />
                    <Input name='Valor' icon={setImage('dinheiro')} />
                    <Input name='Rendimento' icon={setImage('rendimento')} />
                </AdjacentInfos>
                <Button to="/Login" >Lançar pedido</Button>
            </Container>
        </PageDefault>
    )
}

export default QueroCredito;
