import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddProductForm from './components/AddProductForm';
import Product from './pages/Product';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddProductForm />,
    },
    {
      path: "/shoppingcart",
      element: <Product />,
    }
  ]);

  return  <RouterProvider router={router} />
}

export default App;
