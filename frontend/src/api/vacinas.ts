import { defaultHttpInstance, Http } from "./http-instance";

export interface Vacina {
  id: number;
  nome: string;
  doses: number;
  periodicidade: number;
  intervalo: number;
}

const RESOURCE_ROUTE = "vacinas";

export class ApiVacinas {
  constructor(private _http: Http = defaultHttpInstance) {}

  all = () => {
    return this._http.get(RESOURCE_ROUTE).json<Vacina[]>();
  };

  create = (vacina: Omit<Vacina, 'id'>) => {
    return this._http.post(RESOURCE_ROUTE, { json: vacina }).json<Vacina>();
  };

  delete = (id: number) => {
    return this._http.delete(`${RESOURCE_ROUTE}/${id}`).json();
  };
}

export const defaultApiVacinas = new ApiVacinas();
