import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import About from "./pages/About";
import AppLayout from "./components/Layout/AppLayout";
import Errorpage from "./pages/Errorpage";
import CountryDetails from "./components/Layout/CountryDetails";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Errorpage />,
        children: [
          {
            path: "/",
            element: <Home />,
          },

          {
            path: "/about",
            element: <About />,
          },

          {
            path: "/contact",
            element: <Contact />,
          },

          {
            path: "country",
            element: <Country />,
          },

          {
            path: "country/:id",
            element: <CountryDetails />,
          },
        ],
      },
    ],
    {
      basename: "/world",
    }
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
