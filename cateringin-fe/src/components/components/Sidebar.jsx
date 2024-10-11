import React from "react";
import { Menu, ClipboardList, MenuIcon, History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  return (
    // Layout yang berubah sesuai ukuran layar
    <div className='fixed bottom-0 w-full md:top-20 md:bottom-auto md:w-20 md:h-screen md:border-r border-t md:border-t-0 border-gray-200 bg-white shadow-lg'>
      <nav className='flex flex-row md:flex-col justify-around md:justify-start md:space-y-6 p-2'>
        <SidebarItem
          to='/menu'
          label='Menu'
          icon={<MenuIcon size={24} />}
          isActive={location.pathname === "/menu"}
        />
        <SidebarItem
          to='/order'
          label='Order'
          icon={<ClipboardList size={24} />}
          isActive={location.pathname === "/order"}
        />
        <SidebarItem
          to='/history'
          label='History'
          icon={<History size={24} />}
          isActive={location.pathname === "/history"}
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({ isActive, to, label, icon }) => {
  return (
    <Link
      to={to}
      className={`w-full flex flex-col items-center p-3 md:p-2 ${
        isActive
          ? "text-yellow-600 bg-yellow-50 border-yellow-500 border"
          : "text-gray-500"
      } hover:text-yellow-600 transition-colors duration-300 rounded-lg`}
    >
      {icon}
      <p className='mt-2 text-sm'>{label}</p>
    </Link>
  );
};

export default Sidebar;
