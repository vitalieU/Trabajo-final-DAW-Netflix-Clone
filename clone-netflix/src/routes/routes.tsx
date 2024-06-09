import { Navigate, type RouteObject } from "react-router-dom";
import Home from '../components/Home.tsx'
import FirstPage from '../components/FirstPage.tsx'
import Pricing from '../components/Pricing.tsx'
import Regform from '../components/Regform.tsx'
import AuthGuard from "./AuthGuard.tsx";
import Spinner from "../components/Spinner.tsx";
import Dashboard from "../components/Dashboard.tsx";
import UsersTable from "../components/UsersTable.tsx";
import MoviesTable from "../components/MoviesTable.tsx";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <FirstPage />,
  },
  {
    path: '/home',
    element: <Home />,
    children:[
      {
        index: true,
        element:
        <AuthGuard> 
           <FirstPage />
        </AuthGuard>
      }
    ]
  },
  {
    path: '/pricing',
    element: <Pricing />,
  },
  {
    path: '/regform',
    element: <Regform />,
  },
  {
    path:'login',
    element:<Regform/>,
  },
  {
    path: '/*',
    element: <Navigate to="/" />,
  },
  {
    path: '/spinner',
    element: <Spinner />,
  },
  {
    path:'/admin',
    element: <Dashboard />,
  },
  {
    path:'/admin/users',
    element: <UsersTable />,
  },
  {
    path:'/admin/movies',
    element: <MoviesTable />,
  }

];

export default routes;
