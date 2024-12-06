import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { VacinasList } from "./pages/Vacinas/VacinasList";
import { VacinasCreate } from "./pages/Vacinas/VacinasCreate";
import { AgendasCreate } from "./pages/Agendas/AgendasCreate";
import { AgendasList } from "./pages/Agendas/AgendasList";
import { UsuariosList } from "./pages/Usuarios/UsuariosList";
import { UsuariosCreate } from "./pages/Usuarios/UsuariosCreate";
import { AlergiasCreate } from "./pages/Alergias/AlergiasCreate";
import { AlergiasList } from "./pages/Alergias/AlergiasList";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="vacinas" />} />
      <Route path="vacinas">
        <Route index element={<VacinasList />} />
        <Route path="create" element={<VacinasCreate />} />
      </Route>
      <Route path="agendas">
        <Route index element={<AgendasList />} />
        <Route path="create" element={<AgendasCreate />} />
      </Route>
      <Route path="usuarios">
        <Route index element={<UsuariosList />} />
        <Route path="create" element={<UsuariosCreate />} />
      </Route>
      <Route path="alergias">
        <Route index element={<AlergiasList />} />
        <Route path="create" element={<AlergiasCreate />} />
      </Route>
    </Routes>
  );
};

export default App;
