import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  const handleNavigation = (item: string) => {
    alert(`Navegando para: ${item}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">MENU</h1>
      <div className="button-group">
        <button onClick={() => handleNavigation('CRUD')} className="home-button">
          CRUD de Vacinas, Alergias, Usuários e Agendas
        </button>
        <button onClick={() => handleNavigation('Listagens Completas')} className="home-button">
          Listagens completas
        </button>
        <button onClick={() => handleNavigation('Filtros de Agendas')} className="home-button">
         Agendas Canceladas e Realizadas
        </button>
        <button onClick={() => handleNavigation('Agendas do Dia')} className="home-button">
          Lista das Agendas do Dia
        </button>
        <button onClick={() => handleNavigation('Baixar Agenda')} className="home-button">
         Dar baixa em uma agenda
        </button>
        <button onClick={() => handleNavigation('Agendamentos do Usuário')} className="home-button">
          Visualizar agendamentos do usuário
        </button>
      </div>
    </div>
  );
};

export default Home;
