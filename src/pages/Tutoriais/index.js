import React, { useState } from 'react';

import PageDefault from '../../components/PageDefault';
import Card from '../../components/Card';
import logo from '../../assets/logo_desc.png';
import insta from '../../assets/insta.png';
import wpp from '../../assets/wpp.png';
import platTutorial from '../../assets/platform_tutorial.png';
import instaTutorial from '../../assets/instagram_tutorial.png';
import whatsTutotial from '../../assets/whats_tutorial.png';
import memeTutorial from '../../assets/meme_tutorial.png';

import {
    Container,
    AdjacentInfos,
    ButtonContainer,
    PlusButton,
    TextContent,
    Message,
} from './styles';

function Tutoriais() {
    const [isVisible, setVisible] = useState(false);

    const handleState = () => setVisible(!isVisible);

    return(
        <PageDefault header type="Perfil" text="Tutoriais">
            <Container>
                <div>
                    <AdjacentInfos>
                        <Card
                        img={platTutorial}
                        descImg={logo}
                        >
                            Como utilizar nossa plataforma
                        </Card>
        
                        <Card
                        img={instaTutorial}
                        descImg={insta}
                        >
                            Como criar uma loja no INSTAGRAM
                        </Card>
                    </AdjacentInfos>

                    <AdjacentInfos>
                        <Card
                        img={whatsTutotial}
                        descImg={wpp}
                        >
                            Como criar uma loja no whatsapp
                        </Card>

                        <Card img={memeTutorial}>
                            Como acessar os cursos do sebrae
                        </Card>
                    </AdjacentInfos>
                </div>

                {isVisible ? (
                    <Message>
                        Esses são todos os tutoriais disponíveis no momento,
                        Você será notificado quando um novo tutorial for adicionado.
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

export default Tutoriais;
