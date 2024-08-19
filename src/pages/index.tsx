import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import Contacts from './ContactsPage';
import Dashboard from './DashboardPage';

const Pages = () => {
    return (
        <div className='h-full'>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Pages;