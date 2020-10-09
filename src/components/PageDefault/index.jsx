import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function PageDefault({ children }){
    return(
        <>
            <Header/>
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default PageDefault;