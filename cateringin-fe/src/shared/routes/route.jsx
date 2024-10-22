import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>error</div>,
    children: [
      {
        path: "",
        element: "Home Page",
      },
    ],
  },
]);

export default router;
