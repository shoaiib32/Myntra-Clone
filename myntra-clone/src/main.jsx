import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import App from './routes/App.jsx';
import myntraStore from './Store/index.js';
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
