// Import packages
import React, { Dispatch, SetStateAction, useState } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Theme, ThemeProvider } from "@emotion/react";

// Import components
import { CustomTheme, themes } from "./themes";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";

// Import styles
import "./App.scss";
import "./index.scss";

const wrapAppBar = (
  Element: React.ElementType,
  setTheme: Dispatch<SetStateAction<CustomTheme>>
) => {
  return (
    <>
      <AppBar className="AppBar" elevation={0}>
        <NavBar setTheme={setTheme} />
      </AppBar>
      <Element />
    </>
  );
};
const router = (setTheme: Dispatch<SetStateAction<CustomTheme>>) =>
  createBrowserRouter([
    {
      path: "/",
      element: wrapAppBar(Home, setTheme),
    },
    {
      path: "/contact",
      element: wrapAppBar(Contact, setTheme),
    },
    {
      path: "/experience",
      element: wrapAppBar(Experience, setTheme),
    },
    {
      path: "/projects",
      element: wrapAppBar(Projects, setTheme),
    },
    {
      path: "*",
      element: wrapAppBar(ErrorPage, setTheme),
    },
  ]);

const App = () => {
  const [theme, setTheme] = useState<Theme>(themes[0]);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router(setTheme)} />
        <Toaster />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
