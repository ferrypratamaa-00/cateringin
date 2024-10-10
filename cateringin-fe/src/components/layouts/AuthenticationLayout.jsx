import { Outlet } from "react-router-dom";

const AuthenticationLayout = ({ children }) => {
  return (
    <div className='w-full h-screen flex items-center justify-center '>
      {children}
      <Outlet />
    </div>
  );
};

export default AuthenticationLayout;
