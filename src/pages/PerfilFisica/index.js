import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Card from '../../components/Card';
import Input from '../../components/Input';
import img01 from './assets/img01.png';
import img02 from './assets/img02.png';
import img03 from './assets/img03.png';
import img04 from './assets/img04.png';


import {
    Container,
    AdjacentInfos,
    ButtonContainer,
    PlusButton,
    TextContent,
    Message,
} from './styles';

function PerfilFisica() {
    const [isVisible, setVisible] = useState(false);

    const handleState = () => setVisible(!isVisible);

    return(
        <PageDefault header type="Perfil" >
            <Container>
                <ButtonContainer>
                    <Input name="Buscar por ramo" />
                    <Input name="Valor de ivestimento" />
                    <Input name="Rendimento" />
                    <Input name="Data de retorno" />
                    <PlusButton>
                        <TextContent>
                            Buscar
                        </TextContent>
                    </PlusButton>
                </ButtonContainer>
                <div>
                    <AdjacentInfos>
                        <Card
                        img={img01}
                        textButton="Pagar"
                        >
                            <p>João Antonio Costa</p>
                            <p>Ramo: Comércio</p>
                            <p>R$ 1.200,00 com 3% de ganho</p>
                            <p>Planeja devolver em 3 meses</p>
                        </Card>
        
                        <Card
                        img={img02}
                        textButton="Pagar"
                        > 
                            <p>João Antonio Costa</p>
                            <p>Ramo: Comércio</p>
                            <p>R$ 1.200,00 com 3% de ganho</p>
                            <p>Planeja devolver em 3 meses</p>
                        </Card>
                    </AdjacentInfos>

                    <AdjacentInfos>
                        <Card
                        img={img03}
                        textButton="Pagar"
                        >
                            <p>João Antonio Costa</p>
                            <p>Ramo: Comércio</p>
                            <p>R$ 1.200,00 com 3% de ganho</p>
                            <p>Planeja devolver em 3 meses</p>
                        </Card>

                        <Card 
                        img={img04}
                        textButton="Pagar"
                        >
                            <p>João Antonio Costa</p>
                            <p>Ramo: Comércio</p>
                            <p>R$ 1.200,00 com 3% de ganho</p>
                            <p>Planeja devolver em 3 meses</p>
                        </Card>
                    </AdjacentInfos>
                </div>

                {isVisible ? (
                    <Message>
                        Esses são todos os Investimentos disponíveis no momento,
                        Você será notificado quando um novo investimento for adicionado.
                    </Message>
                ) : null}

                <ButtonContainer>
                    <PlusButton onClick={handleState}>
                        <TextContent>
                            {isVisible ? 'ocultar' : 'mostrar mais'}
                        </TextContent>
                    </PlusButton>
                </ButtonContainer>
            </Container>
        </PageDefault>
    )
}

export default PerfilFisica;
