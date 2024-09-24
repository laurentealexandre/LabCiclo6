import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <img src="https://cdn-bfmbn.nitrocdn.com/REzOHPZGJXTFrjpjSxvHQwxXjTENlOUC/assets/static/optimized/rev-6322e19/wp-content/uploads/2019/12/10-roteiros-off-road-que-voce-precisa-fazer-pelo-brasil.jpg" alt="Trilha de bike" />
      <button onClick={() => navigate('/trilhas')}>Encontre sua trilha</button>
    </div>
  );
}

export default Home;