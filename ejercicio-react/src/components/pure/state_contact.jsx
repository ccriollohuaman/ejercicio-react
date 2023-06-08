import React, { useState } from 'react';
import PropTypes from 'prop-types';



const StateContactComponent = (estado) => {

    const [conectado, setConectado] = useState(estado);

    return (
        <div>
            <h4>Estado: {conectado === false ? 'Contacto no disponible' : 'Contacto en línea'}</h4>
            <button onClick={()=>setConectado(!conectado)}>{conectado === false ? 'Conectado' : 'Desconectado'}</button>
        </div>
    );
};

StateContactComponent.prototype = {
    estado: PropTypes.bool,
}

export default StateContactComponent;
