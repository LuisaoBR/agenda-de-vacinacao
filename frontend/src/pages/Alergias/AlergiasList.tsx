import { NavLink } from "react-router";
import { useQuery } from "../../api/use-query";
import { defaultApiAlergias } from "../../api/alergias";
import { Shell } from "../../components/Shell/Shell";
import { Table } from "../../components/Table/Table";

export const AlergiasList = () => {
  const [alergias, loading] = useQuery(defaultApiAlergias.all);

  const _delete = async (id: number) => {
    await defaultApiAlergias.delete(id);
    window.location.reload()
  }

  return (
    <Shell>
      <section>
        <NavLink to="/alergias/create">
          <button className="bg-cyan-500 p-2 cursor-pointer">
            Nova alergia
          </button>
        </NavLink>
      </section>

      <Table
        loading={loading}
        cols={["ID","Descrição"]}
        data={alergias?.map((alergia) => ({
          id: alergia.id,
          Descrição: alergia.descricao,
        }))}
        onDelete={_delete}
      />
    </Shell>
  );
};
