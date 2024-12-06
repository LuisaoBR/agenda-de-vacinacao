import { FormEvent, useCallback, useState } from "react";
import { defaultApiUsuarios } from "../../api/usuarios";
import { Shell } from "../../components/Shell/Shell";
import { useNavigate } from "react-router";

export const UsuariosCreate = () => {
  const [nome, setNome] = useState<string>("");
  const [sexo, setSexo] = useState<string>("");
  const [uf, setUf] = useState<string>("");
  const [alergias, setAlergias] = useState<number[]>([]);

  const navigate = useNavigate();

  const create = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      await defaultApiUsuarios.create({
        nome,
        sexo,
        uf,
        alergias,
      });

      await navigate("/usuarios");
    },
    [nome, sexo, uf, alergias, navigate]
  );

  return (
    <Shell>
      <form onSubmit={create}>
        <label className="block">
          Nome:
          <input
            className="block border p-2 m-2"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label className="block">
          Sexo:
          <input
            className="block border p-2 m-2"
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
          />
        </label>

        <label className="block">
          UF:
          <input
            className="block border p-2 m-2"
            value={uf}
            onChange={(e) => setUf(e.target.value)}
          />
        </label>

        <label>
          Alergias (IDs separados por vírgula):
          <input
            className="block border p-2 m-2"
            value={alergias.join(",")}
            onChange={(e) => {
              const alergiasList = e.target.value
                .split(",")
                .map((id) => parseInt(id.trim(), 10))
                .filter((id) => !isNaN(id));
              setAlergias(alergiasList);
            }}
          />
        </label>

        <button type="submit" className="bg-cyan-500 p-2 cursor-pointer">
          Cadastrar usuário
        </button>
      </form>
    </Shell>
  );
};
