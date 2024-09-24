import React, { useState } from 'react';
import '../styles/Trails.css';

const estados = ["São Paulo", "Rio de Janeiro", "Minas Gerais"]; // Adicione mais estados
const cidades = {
  "São Paulo": ["São Paulo", "Campinas", "Santos"],
  "Rio de Janeiro": ["Rio de Janeiro", "Niterói", "Petrópolis"],
  "Minas Gerais": ["Belo Horizonte", "Ouro Preto", "Tiradentes"]
  // Adicione mais cidades para cada estado
};

function Trails() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [trilhas, setTrilhas] = useState([]);

  const handleEstadoChange = (e) => {
    setEstado(e.target.value);
    setCidade('');
  };

  const handleCidadeChange = (e) => {
    setCidade(e.target.value);
    // Simula a busca de trilhas
    setTrilhas(['Trilha do cachorro doido', 'Trilha da vaca brava', 'Trilha secreta', 'Trilha facil', 'Trilha dificil']);
  };

  return (
    <div className="trails">
      <h2>Encontre sua trilha</h2>
      <select value={estado} onChange={handleEstadoChange}>
        <option value="">Selecione um estado</option>
        {estados.map(est => (
          <option key={est} value={est}>{est}</option>
        ))}
      </select>
      
      {estado && (
        <select value={cidade} onChange={handleCidadeChange}>
          <option value="">Selecione uma cidade</option>
          {cidades[estado].map(cid => (
            <option key={cid} value={cid}>{cid}</option>
          ))}
        </select>
      )}

      {trilhas.length > 0 && (
        <div>
          <h3>Trilhas disponíveis em {cidade}, {estado}:</h3>
          <ul>
            {trilhas.map((trilha, index) => (
              <li key={index}>{trilha}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Trails;