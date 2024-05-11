import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import AddBooks from './Pages/AddBooks.jsx';
import AllBooks from './Pages/AllBooks.jsx';
import BorrowedBooks from './Pages/BorrowedBooks.jsx';
import AuthProvider from './FirebaseAuth/AuthProvider.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
        path:"/add-books",
        element:<AddBooks></AddBooks>
      },
      {
        path:"/all-books",
        element:<AllBooks></AllBooks>
      },
      {
        path:"borrowed-books",
        element:<BorrowedBooks></BorrowedBooks>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
