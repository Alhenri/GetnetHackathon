import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import './index.css';


function PageHome() {
    return(
        <PageDefault header>
            <div id="PageHome">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="text">
                    <div id="textContainer">
                        <p>
                            O “poe aqui” é uma iniciativa que busca auxiliar empreendedores e/ou
                            prestadores de serviços. Se interessou? Vem saber mais clicando em <i>mais informações</i>
                        </p>
                    </div>
                </section>
            </div>
        </PageDefault>
    )
}

export default PageHome;
