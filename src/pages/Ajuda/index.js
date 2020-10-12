import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import Button from '../../components/ButtonR'
import './index.css';
import Style from 'styled-components'
import Card from '../../components/Card'
import imgWpp from './assets/wpp.png'


function Ajuda() {
    return(
        <PageDefault header type="Perfil" text="Ajuda">
            <div id="Ajuda">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="Button">
                    <h1>Podemos lhe ajuda nos seguintes canais:</h1>
                    
                    <div id="card">
                       <img src={imgWpp} height="50vh"/>
                       <div id="textarea" >
                           <p>Mande uma mensagem para o número: 4002-8922 ou</p>
                           <Button>Clique Aqui</Button>
                       </div>
                    </div>
                    <div id="plus">
                        <p>Mais  canais serão adicionados no futuro</p>
                    </div>
                </section>
            </div>
        </PageDefault>
    )
}

export default Ajuda;
