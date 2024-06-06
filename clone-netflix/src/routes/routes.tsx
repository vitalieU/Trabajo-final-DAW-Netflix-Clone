import { Navigate, type RouteObject } from "react-router-dom";
import Home from '../components/Home.tsx'
import FirstPage from '../components/FirstPage.tsx'
import Pricing from '../components/Pricing.tsx'
import Regform from '../components/Regform.tsx'
import AuthGuard from "./AuthGuard.tsx";
import Spinner from "../components/Spinner.tsx";
import Dashboard from "../components/Dashboard.tsx";


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
  }
];

export default routes;
