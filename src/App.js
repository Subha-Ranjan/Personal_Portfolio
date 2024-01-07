
import Layout from "./Layout/index"
import Home from "./Home/index";

import { RouterProvider, createBrowserRouter } from "react-router-dom"; //1
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;  //3
}

export default App;
