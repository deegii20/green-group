import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout({ children }) {

  return (
    <div className="min-h-screen  dark:bg-[#2A3446]"> 
    
      {children}
       <Outlet />
    </div>
  );
}