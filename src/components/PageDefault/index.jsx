import React from 'react';
import Header from '../HeaderRegister';
import Footer from '../Footer';

import { Container } from './styles';

function PageDefault({ children }){
    return(
        <>
            <Header/>
            <Container>
                {children}
            </Container>
            <Footer/>
        </>
    )
}

export default PageDefault;