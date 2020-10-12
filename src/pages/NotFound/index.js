import React from 'react';
import PageDefault from '../../components/PageDefault';

// Usei uma div pra tirar eles do efeito di header
function NotFound() {
    return(
      <PageDefault header>
        <h1>Page not found</h1>
        <h2>Error 404!</h2>
      </PageDefault>
    )
}

export default NotFound;
