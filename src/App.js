import './App.css';
import Home from './Pages/Home';
import {
   createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import ProdutInfo from './Pages/ProductInfo'
import CompanyInfo from './Pages/CompanyInfo'
import Table from './Components/Table';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <ProdutInfo />,
    },
    {
      path: "/company",
      element: <CompanyInfo />,
    },
    {
      path: "/table",
      element: <Table />,
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
