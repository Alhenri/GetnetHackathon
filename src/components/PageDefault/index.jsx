import React from 'react';
import Header from '../Header/models/Register';
import Footer from '../Footer';

import { Container } from './styles';

function PageDefault({ children }){
    return(
        <>
            <Header/>
            <Container id="container">
                {children}
            </Container>
            <Footer/>
        </>
    )
}

export default PageDefault;
