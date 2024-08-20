import React from 'react';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import { useAppSelector, useAppDispatch } from '../store/store';
import { setShowContactForm, setSelectedContactId } from '../store/features/contactSlice';

const Contacts = () => {
    const dispatch = useAppDispatch();
    const showContactForm = useAppSelector(state => state.contact.showContactForm);
    const contactList = useAppSelector(state => state.contact.contactList);

    const handleCreateContact = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        dispatch(setShowContactForm(true));
        dispatch(setSelectedContactId(null)); // selectedContactId is null for an add contact 
    };

    return (
        <div className='h-full flex justify-center items-center'>
            <div className='w-full flex flex-col justify-center items-center gap-8'>
                <button onClick={handleCreateContact} className='mt-4 px-6 py-3 bg-cyan-700 text-white font-medium uppercase hover:bg-cyan-800 rounded-md cursor-pointer'>
                    Create Contact
                </button>
                {contactList.length === 0 ? (
                    <div className='mt-4 w-[60%] min-w-[240px] flex flex-col items-center justify-center text-center p-6 py-20 bg-gray-100 border border-gray-300 rounded-lg'>
                        <p className='uppercase text-gray-500 font-semibold'>No contact found.</p>
                        <p className='text-gray-600'>Please add a contact using the "Create Contact" button.</p>
                    </div>
                ) : (
                    <ContactList />
                )}
            </div>
            {showContactForm
                &&
                <div className='fixed z-20 top-0 left-0 right-0 w-full h-full flex justify-center items-center bg-black/70 overflow-y-auto overflow-x-hidden'>
                    <ContactForm />
                </div>
            }
        </div>
    );
};

export default Contacts;
