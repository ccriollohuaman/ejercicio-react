import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ( { contact } ) => {
    return (
        <div>
            <h4>
                Nombre: { contact.name }
            </h4>
            <h4>
                Apellido: { contact.lastname }
            </h4>
            <h4>
                Email: { contact.email }
            </h4>
            <h4>
                Estado: { contact.connected ? 'Contacto En Línea':'Contacto No Disponible' }
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf( Contact )
};


export default ContactComponent;
