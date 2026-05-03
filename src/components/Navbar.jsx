import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#e0f7fa' }}>
    <Link style={{ marginRight: '2rem', fontWeight: 'bold' }} to="/">Home</Link>
    <Link to="/parikrama-guide" style={{ fontWeight: 'bold' }}>Parikrama Guide</Link>
  </nav>
);

export default Navbar;
