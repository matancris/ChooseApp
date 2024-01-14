import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './assets/styles/styles.scss';
import 'react-tooltip/dist/react-tooltip.css'
import PersonDetails from './pages/personDetails.jsx';
import ChooseApp from './pages/ChooseApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "person",
        element: <ChooseApp />,
      },
      {
        path: "person/:personId",
        element: <PersonDetails />,
      }
    ]
  },
  // {
  //   path: "person/:personId",
  //   element: <PersonDetails />,
  // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
