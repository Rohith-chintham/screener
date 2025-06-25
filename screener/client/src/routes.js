import Home from './pages/Home';
import Screener from './pages/Screener';
import StockDetails from './pages/StockDetails';
import Login from './pages/Login';

const routes = [
  { path: '/', element: <Home />, exact: true },
  { path: '/screener', element: <Screener /> },
  { path: '/stock/:symbol', element: <StockDetails /> },
  { path: '/login', element: <Login /> },
];

export default routes;
