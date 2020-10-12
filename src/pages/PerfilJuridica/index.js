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
        <PageDefault header type="Perfil" text="Bem vindo!">
            <div id="PerfilJuridica">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="Button">
                    <ButtonArea><Button to="/Cursos">Cursos</Button></ButtonArea>
                    <ButtonArea><Button to="/Tutoriais">Tutoriais</Button></ButtonArea>
                    <ButtonArea><Button to="/Ajuda">Ajuda</Button></ButtonArea>
                    <ButtonArea><Button to="/QueroCredito" >Quero crédito</Button></ButtonArea>
                </section>
            </div>
        </PageDefault>
    )
}

export default PerfilJuridica;
