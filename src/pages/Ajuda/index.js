import React from 'react';
import PageDefault from '../../components/PageDefault';
import Logo from '../../assets/Logo_Poe.png';
import Button from '../../components/ButtonR'
import './index.css';


function Ajuda() {
    return(
        <PageDefault header type="Perfil" >
            <div id="Ajuda">
                <section id="img" >
                    <img src={Logo} alt='logo' />
                </section>
                <section id="Button">
                    <div id="textarea">
                        <h1>
                            Nós podemos lhe ajudar nos seguintes canais:
                        </h1>
                        <h3>
                            ou você pode ir em tutoriais
                        </h3>
                    </div>
                    <Button>Teste</Button>
                </section>
            </div>
        </PageDefault>
    )
}

export default Ajuda;
