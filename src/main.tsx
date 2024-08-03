import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home  from "./pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/Agency/",
    element: <App />,
    children: [
      {
        path: "/Agency/",
        element: <Home />,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);