import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import VaccinePage from './component/VaccinePage';
import Samana from './component/Samana';

const router = createBrowserRouter([
  {
    path:"/",
    element: <VaccinePage/>
  },
  {
    path:"Samana",
    element: <Samana/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
