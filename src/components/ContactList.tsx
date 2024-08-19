import React from 'react';
import ContactCard from './ContactCard';
import { useAppSelector } from '../store/store'

const ContactList: React.FC = () => {
    const contactList = useAppSelector(state => state.contact.contactList);

    return (
        <div className='w-full p-4 flex flex-row justify-start items-center gap-6'>
            {contactList.map((contact, index) => (
                <ContactCard
                    contact={contact}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ContactList;
