import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRoutes from './routes';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navigation />
        <AppRoutes />
        <footer>
          <div className="footer-content">
            Todos os direitos reservados
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;