import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className='w-full h-screen grid grid-rows-[auto_1fr] bg-gray-50'>
      <Header />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 md:ms-24 md:me-4 mt-20 md:mt-24 p-4 pb-20 md:pb-0'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
