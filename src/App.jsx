import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Products from './Pages/Products';
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Cart from './Pages/Cart'
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const Layout =()=>{
  return(
   <div className="app">
    <Header/>
    <Outlet/>
    <Footer/>
   </div>
  );
};

//TODO:make the Add to cart functionality and make models for the products
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, 
    children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/products',
        element:<Products/>
       },
       {
        path:'/contact',
        element:<Contact/>
       },
       {
        path:'/cart',
        element:<Cart/>
       },
    ]
  },
 
]);

const App = () => {
  return (<div>
     <RouterProvider router={router} />
  </div>
   
  )
}

export default App;