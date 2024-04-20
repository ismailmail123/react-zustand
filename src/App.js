import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home';
import AddProductForm from './components/AddProductForm';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import HomeCart from './pages/HomeCart';
import OrderValue from './pages/OrderValue';
import Navbar from './components/Navbar';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeCart />,
    },
    {
      path: "/add",
      element: <AddProductForm />,
    },
    {
      path: "/shoppingcart",
      element: <Product />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/order",
      element: <OrderValue />,
    },
    {
      path: "/navbar",
      element: <Navbar/>,
    },
  ]);

  return  <RouterProvider router={router} />
}

export default App;
