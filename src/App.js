

import { RouterProvider, createBrowserRouter } from "react-router-dom"; //1
import './App.scss';
import Contact from "./Contact/index";
import Layout from "./Layout/index"
import Home from "./Home/index";
import About from "./Components/About/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <About /> },
      { path: "/contact", element: <Contact /> },


    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;  //3
}

export default App;
