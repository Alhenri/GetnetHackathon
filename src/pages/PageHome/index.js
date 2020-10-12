import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import './index.css';


function PageHome() {
    return(
        <PageDefault header type="Home" >
            <div id="PageHome">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="text">
                    <div id="textContainer">
                        <p>
                            O <b>click pago</b> é uma iniciativa que busca auxiliar empreendedores e/ou
                            prestadores de serviços. Se interessou? Vem saber mais clicando em <u>mais informações</u>
                        </p>
                    </div>
                </section>
            </div>
        </PageDefault>
    )
}

export default PageHome;
