import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Route from './Route'
import All from './components/All';
import FullStack from './components/FullStack';
import Cyber from './components/Cyber';
import DataScience from './components/DataScience';
import Career from './components/Career';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />,
    children: [
      {
        path: "/",
        element: <All />,
      },
      {
        path: "fullstack",
        element: <FullStack/>,
      },
      {
        path: "cyber",
        element: <Cyber/>,
      },
      {
        path: "datascience",
        element: <DataScience/>,
      },
      {
        path: "career",
        element: <Career/>  ,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App