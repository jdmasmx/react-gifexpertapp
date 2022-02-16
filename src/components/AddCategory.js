import React, { useState } from 'react';
import PropTypes from 'prop-types';

//aqui podemos ver como setear el state de un componente padre
export const AddCategory = ({setCategories}) => {//con desestructuracion las props
    //export const AddCategory = (props) => {

    const [inputvalue, setinputvalue] = useState('');

    const handleInputChange = (e) => {
       setinputvalue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //se llama el callback para referenciarlo
        if (inputvalue.trim().length > 2){
            //setCategories, es la funcion del componente padre
            //y se define el valor del state, y cats es el state que 
            //recibe es implicito para cada setXXX, en herencia si se 
            //define pero como en el componente padre, no es tan necesario definirle el state
            //
            
            setCategories( (cats) =>  [inputvalue,...cats]);
            setinputvalue( '' );//como aqui, no se define pero implicito que es inputvalue
        }       
    }

    return (
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    value={ inputvalue }
                    onChange={ handleInputChange }
                />
            </form>
        )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
