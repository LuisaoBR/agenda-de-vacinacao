import { FormEvent, useCallback, useState } from "react";
import { defaultApiAgendas } from "../../api/agendas";
import { Shell } from "../../components/Shell/Shell";
import { useNavigate } from "react-router";

export const AgendasCreate = () => {
  const [data, setData] = useState<string>("");
  const [situacao, setSituacao] = useState<string>(""); 
  const [dataSituacao, setDataSituacao] = useState<string>("");
  const [usuarioId, setUsuarioId] = useState<number>(0);
  const [vacinaId, setVacinaId] = useState<number>(0);

  const navigate = useNavigate();

  const create = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await defaultApiAgendas.create({
        data,
        situacao,
        dataSituacao,
        usuario: { id: usuarioId, nome: "" }, 
        vacina: { id: vacinaId, nome: "" },
      });

      await navigate("/agendas");
    },
    [data, situacao, dataSituacao, usuarioId, vacinaId, navigate],
  );

  return (
    <Shell>
      <form onSubmit={create}>
        <label className="block">
          Data:
          <input
            className="block border p-2 m-2"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </label>

        <label className="block">
          Situação:
          <input
            className="block border p-2 m-2"
            value={situacao}
            onChange={(e) => setSituacao(e.target.value)}
          />
        </label>

        <label className="block">
          Data da situação:
          <input
            className="block border p-2 m-2"
            value={dataSituacao}
            onChange={(e) => setDataSituacao(e.target.value)}
          />
        </label>

        <label className="block">
          Usuario (ID):
          <input
            className="block border p-2 m-2"
            value={usuarioId}
            onChange={(e) => setUsuarioId(Number(e.target.value))}
          />
        </label>
        <label className="block">
          Vacina (ID):
          <input
            className="block border p-2 m-2"
            value={vacinaId}
            onChange={(e) => setVacinaId(Number(e.target.value))}
          />
        </label>

        <button type="submit" className="bg-cyan-500 p-2 cursor-pointer">
          Cadastrar
        </button>
      </form>
    </Shell>
  );
};
