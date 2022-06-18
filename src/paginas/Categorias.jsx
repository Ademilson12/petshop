import React, { useState, useEffect} from 'react'
import '../assets/css/blog.css'
import { Route, useParams, useRouteMatch } from 'react-router-dom'

import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPosts'
import { busca } from '../api/api'

const Categoria = () => {
    const { id } = useParams();
    const { path } = useRouteMatch();
    const [subcategoria, setSubcategoria] = useState([]);

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => setSubcategoria(categoria.subcategoria))
    }, [id])

    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            
            <ListaCategorias />
            <Route exact path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`} />
            </Route>
            
        </>
    )
}

export default Categoria