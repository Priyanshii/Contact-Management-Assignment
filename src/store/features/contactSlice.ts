import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isActive: boolean;
}

interface ContactState {
    contactList: Person[];
    showContactForm: boolean;
    selectedContact: Person | null;
}

const initialState: ContactState = {
    contactList: [],
    showContactForm: false,
    selectedContact: null,
};

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addToContacts: (state, action: PayloadAction<Person>) => {
            state.contactList = [...state.contactList, action.payload];
        },
        updateContact: (state, action: PayloadAction<{ index: number; contact: Person }>) => {
            const { index, contact } = action.payload;
            state.contactList[index] = contact;
        },
        setShowContactForm: (state, action: PayloadAction<boolean>) => {
            state.showContactForm = action.payload;
        },
        setSelectedContact: (state, action: PayloadAction<Person | null>) => {
            state.selectedContact = action.payload;
        },
        deleteContact: (state, action: PayloadAction<number>) => {
            state.contactList = state.contactList.filter((_, index) => index !== action.payload);
        }
    },
});

export const {
    addToContacts,
    updateContact,
    setShowContactForm,
    setSelectedContact,
    deleteContact
} = contactSlice.actions;

export default contactSlice.reducer;
