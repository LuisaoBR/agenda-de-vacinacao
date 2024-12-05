import { FormEvent, useCallback, useState } from "react";
import { defaultApiVacinas } from "../../api/vacinas";
import { Shell } from "../../components/Shell/Shell";
import { useNavigate } from "react-router";

export const VacinasCreate = () => {
  const [nome, setNome] = useState("");
  const [doses, setDoses] = useState(0);
  const [periodicidade, setPeriodicidade] = useState(0);
  const [intervalo, setIntervalo] = useState(0);

  const navigate = useNavigate();

  const create = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await defaultApiVacinas.create({
        nome,
        doses,
        periodicidade,
        intervalo,
      });

      await navigate("/vacinas");
    },
    [nome, doses, periodicidade, intervalo, navigate],
  );

  return (
    <Shell>
      <form onSubmit={create}>
        <label className="block">
          Nome
          <input
            className="block border p-2 m-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label className="block">
          Doses
          <input
            className="block border p-2 m-2"
            value={doses}
            onChange={(e) => setDoses(Number(e.target.value))}
          />
        </label>

        <label className="block">
          Periodicidade
          <input
            className="block border p-2 m-2"
            value={periodicidade}
            onChange={(e) => setPeriodicidade(Number(e.target.value))}
          />
        </label>

        <label className="block">
          Intervalo
          <input
            className="block border p-2 m-2"
            value={intervalo}
            onChange={(e) => setIntervalo(Number(e.target.value))}
          />
        </label>

        <button type="submit" className="bg-cyan-500 p-2 cursor-pointer">
          Cadastrar
        </button>
      </form>
    </Shell>
  );
};
