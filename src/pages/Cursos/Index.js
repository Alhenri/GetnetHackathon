import React from 'react';
import PageDefault from '../../components/PageDefault';
import './index.css';
import Button from '../../components/ButtonR'
import styled from 'styled-components'
import img01 from './assets/img01.png'
import img02 from './assets/img02.png'
import img03 from './assets/img03.png'
import img04 from './assets/img04.png'
import sebrae from './assets/sebrae.png'

export const ButtonArea = styled.div`
    width: 35vh;
`

function Cursos() {
    return(
        <PageDefault header type="Perfil" text="Cursos" img={sebrae}>
            <div id="Cursos">
                <section id="Cursos" >
                    <img src={img01} />
                    <img src={img02} />
                    <img src={img03} />
                    <img src={img04} />
                </section>
                <ButtonArea>
                    <Button>Mais Cursos</Button>
                </ButtonArea>
            </div>
        </PageDefault>
    )
}

export default Cursos;
