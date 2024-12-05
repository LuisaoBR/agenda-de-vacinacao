export interface TableProps {
  loading: boolean;
  cols: string[];
  data?: { id: number; [key: string]: string | number }[];
  onDelete?: (id: number) => void;
}

export const Table = ({ loading, data, cols, onDelete }: TableProps) => {
  return (
    <table className="mt-4 [&_td]:border [&_td]:p-2 [&_td]:px-6">
      <thead>
        <tr>
          {cols.map((col) => (
            <td>{col}</td>
          ))}
        </tr>
      </thead>

      <tbody>
        {loading && (
          <tr>
            <td colSpan={100}>Carregando...</td>
          </tr>
        )}

        {!loading &&
          (data?.length ? (
            data.map((d) => (
              <tr key={d.id}>
                {cols.map((col) => (
                  <td key={`${d.id}-${col}`}>{d[col]}</td>
                ))}

                <td>
                  <button
                    className="bg-cyan-500 p-2 cursor-pointer"
                    onClick={() => onDelete?.(d.id)}
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={100}>Nenhuma resultado encontrado</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
