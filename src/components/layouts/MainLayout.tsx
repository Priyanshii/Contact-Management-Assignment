import React from 'react';
import Sidebar from '../Sidebar';
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='w-full h-full relative flex overflow-x-auto'>
            <Sidebar />
            <div className='relative flex-1 p-10 box-border h-max min-h-[100%] bg-gray-100'>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout;
