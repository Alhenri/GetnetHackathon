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
<<<<<<< HEAD
                    <h1>
                        O “pOe aqui” é uma iniciativa que busca auxiliar o empreendedor e/ou o
                        prestador de serviços.
                    </h1>
=======
                    <div id="textContainer">
                        <p>
                            O “poe aqui” é uma iniciativa que busca auxiliar empreendedores e/ou
                            prestadores de serviços. Se interessou? Vem saber mais clicando em <i>mais informações</i>
                        </p>
                    </div>
>>>>>>> 9df84add7dc1669c9f2474fe5ed4141dcd6a9616
                </section>
            </div>
        </PageDefault>
    )
}

export default PageHome;
