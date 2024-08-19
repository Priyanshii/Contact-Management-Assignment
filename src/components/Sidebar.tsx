import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BiSolidContact } from "react-icons/bi";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar: React.FC = () => {
    return (
        <aside className='w-[70px] md:w-[250px] relative z-10 flex-shrink-0'>
            <div className='w-[70px] md:w-[250px] h-full fixed top-0 left-0 bg-white p-3 pr-0 md:pr-4 box-border border-[1px] border-solid border-gray-100 shadow-lg'>
                <ul className='mt-6 w-full flex flex-col justify-start items-start gap-6 overflow-hidden'>
                    <li className='w-auto md:w-full'>
                        <NavLink to={"/contacts"}
                            className={({ isActive }) =>
                                `flex flex-row justify-normal items-center gap-4 px-4 py-2 text-lg border-2 border-solid border-transparent font-medium rounded-md hover:border-cyan-700 focus:bg-cyan-700 focus:text-white overflow-hidden
                                ${isActive ? "text-white bg-cyan-700" : "text-cyan-700 bg-white"} `
                            }>
                            <BiSolidContact className='w-6 h-6' />
                            <p className='whitespace-nowrap'>Contacts</p>
                        </NavLink>
                    </li>
                    <li className="w-auto md:w-full">
                        <NavLink to={"/"}
                            className={({ isActive }) =>
                                `flex flex-row justify-normal items-center gap-4 px-4 py-2 text-lg border-2 border-solid border-transparent font-medium rounded-md hover:border-cyan-700 focus:bg-cyan-700 focus:text-white overflow-hidden 
                                ${isActive ? "text-white bg-cyan-700" : "text-cyan-700 bg-white"} `
                            }>
                            <RiDashboardFill className='w-6 h-6' />
                            <p className='whitespace-nowrap'>Charts and Maps</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar;