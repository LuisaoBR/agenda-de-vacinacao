import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Vacinas } from "./pages/Vacinas/Vacinas";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="vacinas" />} />
      <Route path="vacinas">
        <Route index element={<Vacinas />} />
      </Route>
    </Routes>
  );
};

export default App;
