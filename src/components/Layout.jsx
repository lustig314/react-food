import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <main className='container content'>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
