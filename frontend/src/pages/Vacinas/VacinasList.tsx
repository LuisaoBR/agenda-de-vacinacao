import { NavLink } from "react-router";
import { useQuery } from "../../api/use-query";
import { defaultApiVacinas } from "../../api/vacinas";
import { Shell } from "../../components/Shell/Shell";
import { Table } from "../../components/Table/Table";

export const VacinasList = () => {
  const [vacinas, loading] = useQuery(defaultApiVacinas.all);

  const _delete = async (id: number) => {
    await defaultApiVacinas.delete(id);
    window.location.reload()
  }

  return (
    <Shell>
      <section>
        <NavLink to="/vacinas/create">
          <button className="bg-cyan-500 p-2 cursor-pointer">
            Nova Vacina
          </button>
        </NavLink>
      </section>

      <Table
        loading={loading}
        cols={["Nome", "Doses", "Periodicidade", "Intervalo"]}
        data={vacinas?.map((vacina) => ({
          id: vacina.id,
          Nome: vacina.nome,
          Doses: vacina.doses.toString(),
          Periodicidade: vacina.periodicidade.toString(),
          Intervalo: vacina.intervalo.toString(),
        }))}
        onDelete={_delete}
      />
    </Shell>
  );
};
