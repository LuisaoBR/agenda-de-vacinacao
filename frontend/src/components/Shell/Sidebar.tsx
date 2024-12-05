import { NavLink } from "react-router";

export const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/vacinas">Vacinas</NavLink></li>
        <li><NavLink to="/alergias">Alergias</NavLink></li>
        <li><NavLink to="/usuarios">Usuários</NavLink></li>
        <li><NavLink to="/agendas">Agendas</NavLink></li>
      </ul>
    </nav>
  );
};
