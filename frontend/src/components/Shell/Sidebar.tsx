import { NavLink } from "react-router";

export const Sidebar = () => {
  return (
    <nav className="w-60 shadow-lg z-10">
      <NavLink className="p-3 border-b block [&.active]:bg-gray-200" to="/vacinas">
        Vacinas
      </NavLink>
      <NavLink className="p-3 border-b block" to="/alergias">
        Alergias
      </NavLink>
      <NavLink className="p-3 border-b block" to="/usuarios">
        Usuários
      </NavLink>
      <NavLink className="p-3 border-b block [&.active]:bg-gray-200" to="/agendas">
        Agendas
      </NavLink>
    </nav>
  );
};
