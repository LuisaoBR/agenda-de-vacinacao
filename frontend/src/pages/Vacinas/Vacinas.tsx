import { useQuery } from "../../api/use-query";
import { defaultApiVacinas } from "../../api/vacinas";
import { Shell } from "../../components/Shell/Shell";

export const Vacinas = () => {
  const [vacinas, loading] = useQuery(defaultApiVacinas.all);

  return (
    <Shell>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Doses</th>
            <th>Periodicidade</th>
            <th>Intervalo</th>
          </tr>
        </thead>

        <tbody>
          {loading && (
            <tr>
              <td colSpan={100}>Carregando...</td>
            </tr>
          )}

          {!loading &&
            (vacinas?.length ? (
              vacinas.map((vacina) => (
                <tr>
                  <td>{vacina.nome}</td>
                  <td>{vacina.doses}</td>
                  <td>{vacina.periodicidade}</td>
                  <td>{vacina.intervalo}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={100}>Nenhuma vacina cadastrada</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Shell>
  );
};
