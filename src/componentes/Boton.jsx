import React from 'react';
import '../hojas-de-estilo/Boton.css'


// "texto" es el texto que quiero que diga el boton, esBotonDeClick es un operador ternario 
// y manejarClick es una funcion
function Boton({texto, esBotonDeClick, manejarClick}) {
    return(
        <button className={esBotonDeClick ? 'boton-click' : 'boton-reiniciar'}
            onClick={manejarClick} >
            {texto}
        </button>
    )
}

export default Boton;