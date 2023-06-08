import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import StateContactComponent from './state_contact';


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
            <StateContactComponent estado={true}></StateContactComponent>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf( Contact )
};


export default ContactComponent;
