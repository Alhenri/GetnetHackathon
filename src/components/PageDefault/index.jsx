import React from 'react'
import Header from '../Header'
import Footer from '../Footer'


function PageDefault({ children }){
    return(
        <>
            <Header/>
            <div id="content">
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default PageDefault;