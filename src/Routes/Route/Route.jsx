import {
    createBrowserRouter,
  } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import AboutMe from "../../pages/About Me/AboutMe";
import Main from "../../RootLayout/Main";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <AboutMe/>
        }
      ]
    },
  ]);

  export default router;