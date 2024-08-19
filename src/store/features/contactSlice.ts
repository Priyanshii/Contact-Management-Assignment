import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    isActive: boolean;
}

interface ContactState {
    contactList: Person[];
    showContactForm: boolean;
    selectedContactId: string | null;
}

const initialState: ContactState = {
    contactList: [],
    showContactForm: false,
    selectedContactId: null,
};

export const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        addToContacts: (state, action: PayloadAction<Person>) => {
            state.contactList = [...state.contactList, action.payload];
        },
        updateContact: (state, action: PayloadAction<{ id: string, contact: Person }>) => {
            const { id, contact } = action.payload;
            state.contactList = state.contactList.map((item) =>
                item.id === id ? contact : item
            );
        },
        setShowContactForm: (state, action: PayloadAction<boolean>) => {
            state.showContactForm = action.payload;
        },
        setSelectedContactId: (state, action: PayloadAction<string | null>) => {
            state.selectedContactId = action.payload;
        },
        deleteContact: (state, action: PayloadAction<string>) => {
            state.contactList = state.contactList.filter((contact) => contact.id !== action.payload);
        }
    },
});

export const {
    addToContacts,
    updateContact,
    setShowContactForm,
    setSelectedContactId,
    deleteContact
} = contactSlice.actions;

export default contactSlice.reducer;
