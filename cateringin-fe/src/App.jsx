import { RouterProvider } from "react-router-dom";
import router from "./shared/routes/route";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
