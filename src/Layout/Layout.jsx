import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import Footer from '../components/Footer';
const Layout = () => {
  return (
    <div>
        <Navbar />
        <main className='flex justify-center'>
          <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default Layout;