import React, { useState } from 'react'
import reactDom from "react-dom";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
      
    const [ categories, setCategories ] = useState( ['One Punch'] );
    //const [ categories, setCategories ] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] );
    //ejemplo antes de AddCategory  , esto se llamaba con un boton
    // const handleAdd = () => {
    //     //setCategories( ['Bulma2',...categories] );
    //     //En un array funcion puede ir o no el parametro, para los states
    //     //el parametro es implicito que es lo que se define en el usestate 
    //     setCategories( (cats) =>  ['Bulma2',...cats]);
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Componente para agregar categorias */}
            <AddCategory setCategories={ setCategories } />
            <hr />
             <ol>
                {  
                    // categories.map(cat => {
                    //     return <li key={cat}> { cat } </li>
                    // })

                    categories.map(cat => (//por que devuelve un objeto
                        //Componente que consume el API y devuelve la lista del response
                        <GifGrid 
                        key={ cat }
                        category={ cat } />
                    ))
                }
            </ol>


        </>
    )
}