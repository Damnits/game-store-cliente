import { Cidade } from "./cidade";

export class Endereco {
  id?: number;
  name?: string;
  number?: string;
  complemento?: string;
  district?: string;
  postalCode?: string;
  city?: Cidade;
}