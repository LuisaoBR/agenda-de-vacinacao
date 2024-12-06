
import { defaultHttpInstance, Http } from "./http-instance";

export interface Usuario {
    id: number;
    nome: string;
  }
  
  export interface Vacina {
    id: number;
    nome: string;
  }
  
  export interface Agenda {
    id: number;
    data: string;
    situacao: string;
    dataSituacao: string;
    usuario: Usuario;
    vacina: Vacina;
  }

const RESOURCE_ROUTE = "agendas";

export class ApiAgendas {
  constructor(private _http: Http = defaultHttpInstance) {}

  all = () => {
    return this._http.get(RESOURCE_ROUTE).json<Agenda[]>();
  };

  create = (agenda: Omit<Agenda, 'id'>) => {
    return this._http.post(RESOURCE_ROUTE, { json: agenda }).json<Agenda>();
  };

  delete = (id: number) => {
    return this._http.delete(`${RESOURCE_ROUTE}/${id}`).json();
  };
}

export const defaultApiAgendas = new ApiAgendas();