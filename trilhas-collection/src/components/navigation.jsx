import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Página Inicial</Link></li>
          <li><Link to="/trilhas">Trilhas</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
