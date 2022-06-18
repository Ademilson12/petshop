import React from "react";
import { useParams } from "react-router-dom";
import ListaPost from "../components/ListaPosts";


const SubCategoria = () => {
    const {subcategoria} = useParams();
    return (
        <ListaPost url={`/posts?subcategorias=${subcategoria}`} />
    );
}

export default SubCategoria;