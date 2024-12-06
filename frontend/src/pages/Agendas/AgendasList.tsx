import { NavLink } from "react-router";
import { useQuery } from "../../api/use-query";
import { defaultApiAgendas } from "../../api/agendas";
import { Shell } from "../../components/Shell/Shell";
import { Table } from "../../components/Table/Table";

export const AgendasList = () => {
  const [agendas, loading] = useQuery(defaultApiAgendas.all);

  const _delete = async (id: number) => {
    await defaultApiAgendas.delete(id);
    window.location.reload();
  };

  return (
    <Shell>
      <section>
        <NavLink to="/agendas/create">
          <button className="bg-cyan-500 p-2 cursor-pointer">
            Marcar na agenda
          </button>
        </NavLink>
      </section>

      <Table
        loading={loading}
        cols={["ID", "Data", "Situação", "Data situação", "Usuário", "Vacina"]}
        data={agendas?.map((agenda) => ({
          id: agenda.id,
          Data: agenda.data.toString(),
          Situação: agenda.situacao,
          "Data situação": agenda.dataSituacao,
          Usuário: agenda.usuario?.nome,
          Vacina: agenda.vacina?.nome,
        }))}
        onDelete={_delete}
      />
    </Shell>
  );
};
