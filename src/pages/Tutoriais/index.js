import React from 'react';
import PageDefault from '../../components/PageDefault';
import './index.css';
import Button from '../../components/ButtonR'
import Card from '../../components/Card'
import styled from 'styled-components'

export const ButtonArea = styled.div`
    width: 35vh;
`

function Tutoriais() {
    return(
        <PageDefault header type="Perfil" text="Tutoriais">
            <div id="Tutoriais">
                <section id="Tutoriais" >
                
                </section>
                <ButtonArea>
                    <Button>Carregar mais</Button>
                </ButtonArea>
            </div>
        </PageDefault>
    )
}

export default Tutoriais;
