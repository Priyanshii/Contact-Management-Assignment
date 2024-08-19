import React, { useState } from 'react';
import { Person, deleteContact, setSelectedContact, setShowContactForm } from '../store/features/contactSlice';
import { useAppDispatch } from '../store/store';
import { CiCircleCheck } from "react-icons/ci";
import { ImCancelCircle } from "react-icons/im";

interface ContactDetailsCardProps {
    contact: Person;
    index: number
}

const ContactCard: React.FC<ContactDetailsCardProps> = ({ contact, index }) => {

    const { firstName, lastName, phoneNumber, isActive } = contact;

    const [showDetails, setShowDetails] = useState<boolean>();

    const dispatch = useAppDispatch();

    const handleViewDetails = () => {
        setShowDetails(!showDetails);
    }

    const handleDeletecontact = () => {
        dispatch(deleteContact(index));
    }

    const handleEditDetails = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        dispatch(setShowContactForm(true));
        dispatch(setSelectedContact(contact));
    };

    return (
        <div className={`flex-1 min-w-[300px] max-w-[400px] h-[280px] sm:h-[240px] rounded-md flex flex-col justify-between items-start gap-4 bg-white border-solid border-b-2 border-gray-200 p-4 shadow-md`}>
            <div className='flex flex-row items-start justify-normal gap-1 text-xl text-gray-700 font-medium'>
                <p className='mr-1'>{index + 1}.</p>
                <div className='w-full flex flex-col justify-normal items-start gap-2 flex-wrap'>
                    <p className='capitalize break-all'>{firstName} {lastName}</p>
                    {
                        showDetails
                        &&
                        <div className='flex flex-col items-start gap-1 text-sm'>
                            {phoneNumber && <p className='text-gray-500 font-semibold'>Phone Number : {phoneNumber}</p>}
                            <div className='text-gray-500 font-medium'>
                                {isActive ?
                                    <section className='flex flex-row items-center justify-start gap-2'>
                                        <CiCircleCheck className='w-4 h-4 stroke-2 stroke-green-600' />
                                        <p>Active</p>
                                    </section>
                                    :
                                    <section className='flex flex-row items-center justify-start gap-2'>
                                        <ImCancelCircle className='w-3 h-3 fill-red-600' />
                                        <p>Inactive</p>
                                    </section>
                                }
                            </div>
                        </div>
                    }
                    <button className={`px-3 py-1 text-sm text-sky-600 border-2 border-solid border-sky-600 font-semibold rounded-md hover: active:bg-sky-600 active:text-white cursor-pointer`} onClick={handleViewDetails}>{showDetails ? 'Hide' : 'View Details'}
                    </button>
                </div>
            </div>
            <div className='w-full flex flex-row items-center justify-normal gap-4'>
                <button className='flex-1 px-3 py-1 text-lg text-white bg-green-600 border-2 border-solid border-transparent font-medium rounded-md hover:bg-green-700 active:bg-green-700 cursor-pointer' onClick={handleEditDetails}>
                    Edit
                </button>
                <button className='flex-1 px-3 py-1 text-lg text-white bg-red-600 border-2 border-solid border-transparent font-medium rounded-md hover:bg-red-700 active:bg-red-800 cursor-pointer' onClick={handleDeletecontact}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
