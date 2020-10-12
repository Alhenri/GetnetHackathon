import React from 'react';
import Presentation from '../Header/models/Presentation';
import Register from '../Header/models/Register'
import Footer from '../Footer';

import { Container } from './styles';
let Header

function PageDefault({ children, headerModel, header, type }){
    if(headerModel === "Register"){
        Header = Register
    }else{
        Header = Presentation
    }
    return(
        <>
            {header ? <Header type={type} /> : null}
            <Container id="container">
                {children}
            </Container>
            <Footer/>
        </>
    )
}

export default PageDefault;
