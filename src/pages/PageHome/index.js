import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import './index.css';


function PageHome() {
    return(
        <PageDefault>
            <div id="PageHome">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="text">
                    <h1>
                        O “pOe aqui” é uma iniciativa que busca auxiliar o empreendedor e/ou o
                        prestador de serviços.
                    </h1>
                </section>
            </div>
        </PageDefault>
    )
}

export default PageHome;
