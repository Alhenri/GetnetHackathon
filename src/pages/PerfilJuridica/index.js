import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import './index.css';
import Button from '../../components/ButtonR'
import styled from 'styled-components'

export const ButtonArea = styled.div`
    width: 35vh;
`

function PerfilJuridica() {
    return(
        <PageDefault header type="Perfil" >
            <div id="PerfilJuridica">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="Button">
                    <ButtonArea><Button>Cursos</Button></ButtonArea>
                    <ButtonArea><Button>Tutoriais</Button></ButtonArea>
                    <ButtonArea><Button>Ajuda</Button></ButtonArea>
                    <ButtonArea><Button>Quero crédito</Button></ButtonArea>
                </section>
            </div>
        </PageDefault>
    )
}

export default PerfilJuridica;
