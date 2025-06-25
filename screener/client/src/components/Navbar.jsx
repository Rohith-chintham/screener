import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/screener?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">📊 Screener</div>

      <nav className="navbar-links">
        <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
        <NavLink to="/screener" activeclassname="active">Screener</NavLink>
        <NavLink to="/login" activeclassname="active">Login</NavLink>
        <NavLink to="/register" activeclassname="active">Register</NavLink>
      </nav>

      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search stocks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
};

export default Navbar;
