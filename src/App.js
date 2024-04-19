import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import AddProductForm from './components/AddProductForm';

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
  ]);

  return  <RouterProvider router={router} />
}

export default App;
