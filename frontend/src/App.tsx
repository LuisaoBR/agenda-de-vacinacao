import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { VacinasList } from "./pages/Vacinas/VacinasList";
import { VacinasCreate } from "./pages/Vacinas/VacinasCreate";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="vacinas" />} />
      <Route path="vacinas">
        <Route index element={<VacinasList />} />
        <Route path="create" element={<VacinasCreate />} />
      </Route>
    </Routes>
  );
};

export default App;
