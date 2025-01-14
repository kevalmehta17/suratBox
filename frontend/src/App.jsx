import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home.jsx";
import { Box } from "../pages/Box.jsx";
import { ContactUs } from "../pages/ContactUs.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register.jsx";
import AppLayout from "../ui/AppLayout.jsx";
import Error from "../ui/Error.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/box", element: <Box /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
