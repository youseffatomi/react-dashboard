import { initThemeMode, ThemeProvider } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeInit } from "../.flowbite-react/init";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./css/index.css";
import Theme from "./config/theme"
import Layout from "./components/layout/index.tsx";
import AuthLayout from "./components/AuthLayout/index.tsx";
import Signin from "./pages/auth/signin.tsx";
import Signup from "./pages/auth/signup.tsx";

const router = createBrowserRouter([
  {
    path:"/auth",
    element:<AuthLayout/>,
    children:[
      {index : true , element:<Navigate to="signin" replace /> },
      {path:"signin",element:<Signin/>},
      {path:"signup",element:<Signup/>},
    ]
  },
  {
    path: "/",
    element: <Layout/>,
    children :[
      {index:true , element:<App/>},
    ]
  },
  {
    path: "/*",
    element: <div>404</div>,
   
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    
    <ThemeInit />
    <ThemeProvider theme={Theme}>

    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);

initThemeMode();
