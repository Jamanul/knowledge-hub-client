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
import PrivateRoute from './Routes/PrivateRoute.jsx';
import RowView from './Components/RowView.jsx';
import CardView from './Components/CardView.jsx';
import UpdatePage from './Pages/UpdatePage.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';
import DetailsPage from './Pages/DetailsPage.jsx';
import BuyBooks from './Pages/BuyBooks.jsx';

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
        element:<PrivateRoute><AddBooks></AddBooks></PrivateRoute>
      },
      {
        path:'/buy-books',
        element:<PrivateRoute><BuyBooks></BuyBooks></PrivateRoute>
      },
      {
        path:"/all-books",
        element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
        //loader: ()=>fetch('https://knowledge-hub-server-rho.vercel.app/all-books'),
        children:[
          {
            path:'/all-books',
            element:<RowView></RowView>
          },
          {
            path:"/all-books/card-view",
            element:<CardView></CardView>
          }
        ]
      },
      {
        path:"/borrowed-books",
        element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
      },
      {
        path:"/updatePage/:id",
        element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
        loader:({params})=>fetch(`https://knowledge-hub-server-rho.vercel.app/all-books/${params.id}`)
      },
      {
        path:"/category-page/:id",
        element:<CategoryPage></CategoryPage>,
      },
      {
        path:"/detailsPage/:id",
        element:<PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
        loader:({params})=>fetch(`https://knowledge-hub-server-rho.vercel.app/all-books/${params.id}`)
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
