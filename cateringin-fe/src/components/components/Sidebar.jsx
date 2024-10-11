import React, { useState } from "react";
import { MenuIcon, ClipboardList, History } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { CartPage } from "../pages/transaction/CartPage";

const Sidebar = () => {
  const location = useLocation();

  const products = [
    {
      id: 1,
      name: "Nasi Goreng",
      price: 20000,
      merchant: "Catering One",
      image: "https://source.unsplash.com/400x300/?nasi-goreng",
      description: "Delicious fried rice.",
    },
    {
      id: 2,
      name: "Sushi",
      price: 50000,
      merchant: "Sushi House",
      image: "https://source.unsplash.com/400x300/?sushi",
      description: "Fresh sushi with wasabi.",
    },
  ];

  const buyerInfo = {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, Jakarta",
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <CartPage
        open={open}
        setOpen={() => setOpen(false)}
        products={products}
        buyerInfo={buyerInfo}
      />

      <div className='fixed bottom-0 w-full md:top-20 md:bottom-auto md:w-20 md:h-screen md:border-r border-t md:border-t-0 border-gray-200 bg-white shadow-lg'>
        <nav className='flex flex-row md:flex-col justify-around md:justify-start md:space-y-6 p-2'>
          <SidebarItem
            to='/'
            label='Menu'
            icon={<MenuIcon size={24} />}
            isActive={location.pathname === "/menu"}
          />
          <SidebarItem
            label='Order'
            icon={<ClipboardList size={24} />}
            onClick={() => setOpen(true)}
          />
          <SidebarItem
            to='/history'
            label='History'
            icon={<History size={24} />}
            isActive={location.pathname === "/history"}
          />
        </nav>
      </div>
    </>
  );
};

const SidebarItem = ({ isActive, to, label, icon, onClick }) => {
  return to ? (
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
  ) : (
    <button
      onClick={onClick}
      className={`w-full flex flex-col items-center p-3 md:p-2 ${
        isActive
          ? "text-yellow-600 bg-yellow-50 border-yellow-500 border"
          : "text-gray-500"
      } hover:text-yellow-600 transition-colors duration-300 rounded-lg`}
    >
      {icon}
      <p className='mt-2 text-sm'>{label}</p>
    </button>
  );
};

export default Sidebar;
