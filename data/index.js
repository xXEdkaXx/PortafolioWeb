
import global from './global';

import catalogoData from './pages/catalogoData';
import galeriaDate from './pages/galeria';
import TablaData from './pages/tabla';

const getPageContext = (page) => {
    let pageVariables = {};
    switch (page) {
        case '/catalogo.html':
            pageVariables = catalogoData;
            break;
        case '/about.html':
            pageVariables = TablaData;
            break;
        case '/galeria.html':
            pageVariables = galeriaDate;
            break;
    }
    return {
        ...pageVariables,
        ...global(page),
    };
}

export default getPageContext;