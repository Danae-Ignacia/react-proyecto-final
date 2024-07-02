import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from '@/components/SearchBar';
import CartWidget from '@/components/CartWidget';
import logo from "../../assets/logo-cartoon-craze-red.png";

export default function Navbar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-slate-700 shadow-lg sticky top-0 z-10">
            <div className="flex items-center space-x-4">
                {isSideBarOpen ? (
                    <FaTimes className="text-white cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out" onClick={toggleSideBar} />
                ) : (
                    <FaBars className="text-white cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out" onClick={toggleSideBar} />
                )}
                <Link to="/" className="cursor-pointer">
                <img className="navbar-brand w-25" src={logo} alt="Logo" />
                </Link>
                <Link to="/" className="cursor-pointer">
                    <span className="text-white font-lato-bold text-bold text-xl">CartoonCraze</span>
                </Link>
            </div>
            <div className="hidden lg:block w-1/2">
                <SearchBar />
            </div>
            <div className="flex items-center">
                <CartWidget />
                <Profile />
            </div>
            {isSideBarOpen && (
                <SideBar toggleSideBar={toggleSideBar} />
            )}
        </nav>
    );
};