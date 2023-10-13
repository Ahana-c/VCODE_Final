import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import PrimaryPage from "./Pages/Primarypage";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <RouterProvider
  router={createBrowserRouter([
    {
      path: '/',
      element: <PrimaryPage/>,
      // errorElement: <ErrorPage />,
      children: [
        {
          // errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Login /> },
            {
              path: '/home',
              element: <Home/>,
            },
          ],
        },
      ],
    },
  ])}
/>
    </>
  );
}

export default App;