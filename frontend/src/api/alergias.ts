import { defaultHttpInstance, Http } from "./http-instance";

export interface Alergia {
  id: number;
  descricao: string;
}

const RESOURCE_ROUTE = "alergias";

export class ApiAlergias {
  constructor(private _http: Http = defaultHttpInstance) {}

  all = () => {
    return this._http.get(RESOURCE_ROUTE).json<Alergia[]>();
  };

  create = (alergia: Omit<Alergia, "id">) => {
    return this._http.post(RESOURCE_ROUTE, { json: alergia }).json<Alergia>();
  };

  delete = (id: number) => {
    return this._http.delete(`${RESOURCE_ROUTE}/${id}`).json();
  };
}

export const defaultApiAlergias = new ApiAlergias();
