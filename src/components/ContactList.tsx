import React from 'react';
import ContactCard from './ContactCard';
import { useAppSelector } from '../store/store'

const ContactList: React.FC = () => {
    const contactList = useAppSelector(state => state.contact.contactList);

    return (
        <div className='w-full p-4 flex flex-row justify-center items-center gap-6 flex-wrap'>
            {contactList.map((contact, index) => (
                <ContactCard
                    key={index}
                    contact={contact}
                    index={index}
                />
            ))}
        </div>
    );
};

export default ContactList;
