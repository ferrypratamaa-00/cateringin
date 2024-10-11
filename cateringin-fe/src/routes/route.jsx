import AuthenticationLayout from "@/components/layouts/AuthenticationLayout";
import MainLayout from "@/components/layouts/MainLayout";
import RegisterPage from "@/components/pages/auth/RegisterPage";
import SignInPage from "@/components/pages/auth/SignInPage";
import HomePage from "@/components/pages/home/HomePage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthenticationLayout />,
    children: [
      {
        path: "login",
        element: <SignInPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);

export default router;
