import { FormEvent, useCallback, useState } from "react";
import { defaultApiAlergias } from "../../api/alergias";
import { Shell } from "../../components/Shell/Shell";
import { useNavigate } from "react-router";

export const AlergiasCreate = () => {
  const [descricao, setDescricao] = useState("");

  const navigate = useNavigate();

  const create = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await defaultApiAlergias.create({
        descricao,
      });

      await navigate("/alergias");
    },
    [descricao, navigate],
  );

  return (
    <Shell>
      <form onSubmit={create}>
        <label className="block">
          Descrição:
          <input
            className="block border p-2 m-2"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <button type="submit" className="bg-cyan-500 p-2 cursor-pointer">
          Cadastrar
        </button>
      </form>
    </Shell>
  );
};
