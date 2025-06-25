import { useLocation } from 'react-router-dom';

const Screener = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const search = params.get('search'); // e.g., "INFY"

  // use this search value to filter your stock list
};
