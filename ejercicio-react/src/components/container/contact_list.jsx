import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Name', 'LastName', 'name@email.com',false)

    return (
        <div>
            <div>
                <h1>Contacts</h1>
            </div>
            {/* Componente ContactComponent */}
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default ContactListComponent;
