import React, { useState, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../store/store';
import { addToContacts, updateContact, setShowContactForm, setSelectedContact } from '../store/features/contactSlice';
import { Person } from '../store/features/contactSlice';

const ContactForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const ref = useRef<HTMLDivElement | null>(null);

    const { contactList, selectedContact } = useAppSelector(state => state.contact);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        isActive: true,
    });

    useEffect(() => {
        if (selectedContact !== null) {
            setFormData(selectedContact);
        }
    }, [selectedContact]);

    const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (selectedContact) {
            // Edit existing contact
            dispatch(updateContact({ index: contactList.indexOf(selectedContact), contact: formData }));
        } else {
            // Add new contact
            dispatch(addToContacts(formData));
        }

        // Close form and reset selected contact
        dispatch(setShowContactForm(false));
        dispatch(setSelectedContact(null));
    };

    const handleCancel = () => {
        dispatch(setShowContactForm(false));
        // dispatch(setSelectedContact(null));
    };

    const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
            handleCancel();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    return (
        <div ref={ref} className='relative w-auto md:w-[500px] h-[480px] bg-white py-8 px-10'>
            <div className='w-full h-full flex flex-col items-center justify-evenly'>
                <form onSubmit={handleSubmit} className="w-full flex flex-col justify-between items-start gap-8">
                    <section className='w-full flex flex-col md:flex-row items-center justify-between gap-8'>
                        <input
                            type="text"
                            name='firstName'
                            placeholder='First Name'
                            value={formData.firstName}
                            onChange={handleFormData}
                            className='text-base p-3 pl-1 w-full md:w-44 border-b-[1px] border-solid border-[#8b8787] outline-none focus:border-[#1ac914]'
                            required
                            minLength={2}
                            maxLength={40}
                        />
                        <input
                            type="text"
                            name='lastName'
                            placeholder='Last Name'
                            value={formData.lastName}
                            onChange={handleFormData}
                            className='text-base p-3 pl-1 w-full md:w-44 border-b-[1px] border-solid border-[#8b8787] outline-none focus:border-[#1ac914]'
                            required
                            minLength={2}
                            maxLength={40}
                        />
                    </section>
                    <input
                        type="tel"
                        name='phoneNumber'
                        placeholder='Phone number'
                        value={formData.phoneNumber}
                        onChange={handleFormData}
                        className='text-base p-3 pl-1 w-full border-b-[1px] border-solid border-[#8b8787] outline-none focus:border-[#1ac914]'
                    />
                    <section className='mt-2 flex flex-row items-center justify-normal gap-4'>
                        <label htmlFor='activeStatus' className='uppercase text-gray-700 font-semibold '>Active :</label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                name='isActive'
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                checked={formData.isActive}
                                onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                            />
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-1 peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-600"></div>
                        </label>

                    </section>
                    <section className='mt-4 w-full flex flex-row items-center justify-center gap-6'>
                        <button type="submit" className='px-4 py-2 bg-cyan-700 text-white rounded-md cursor-pointer'>{selectedContact ? 'Save Changes' : 'Add Contact'}</button>
                        <button type="button" className='px-4 py-2 bg-cyan-700 text-white rounded-md cursor-pointer' onClick={handleCancel}>Cancel</button>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
