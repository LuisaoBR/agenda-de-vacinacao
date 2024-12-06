import { NavLink } from "react-router";
import { useQuery } from "../../api/use-query";
import { defaultApiUsuarios } from "../../api/usuarios";
import { Shell } from "../../components/Shell/Shell";
import { Table } from "../../components/Table/Table";

export const UsuariosList = () => {
  const [usuarios, loading] = useQuery(defaultApiUsuarios.all);

  const _delete = async (id: number) => {
    await defaultApiUsuarios.delete(id);
    window.location.reload();
  };

  return (
    <Shell>
      <section>
        <NavLink to="/usuarios/create">
          <button className="bg-cyan-500 p-2 cursor-pointer">
            Novo usuário
          </button>
        </NavLink>
      </section>

      <Table
        loading={loading}
        cols={["Nome", "Sexo", "UF", "Alergias"]}
        data={usuarios?.map((usuario) => ({
          id: usuario.id,
          Nome: usuario.nome,
          Uf: usuario.uf.toString(),
          Alergias: usuario.alergias.toString(),
        }))}
        onDelete={_delete}
      />
    </Shell>
  );
};
