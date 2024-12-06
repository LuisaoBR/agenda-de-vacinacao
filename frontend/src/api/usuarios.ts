import { defaultHttpInstance, Http } from "./http-instance";

export interface Usuario {
    id: number;
    nome: string;
    sexo: string;
    uf: string; 
    alergias: number[]; 
  }
  

const RESOURCE_ROUTE = "usuarios";

export class ApiUsuarios {
  constructor(private _http: Http = defaultHttpInstance) {}

  all = () => {
    return this._http.get(RESOURCE_ROUTE).json<Usuario[]>();
  };

  create = (usuario: Omit<Usuario, 'id'>) => {
    return this._http.post(RESOURCE_ROUTE, { json: usuario }).json<Usuario>();
  };

  delete = (id: number) => {
    return this._http.delete(`${RESOURCE_ROUTE}/${id}`).json();
  };
}

export const defaultApiUsuarios = new ApiUsuarios();
