import { Cliente } from "./cliente";
import { Pagamento } from "./pagamento";

export class Pedido {
  id?: number;
  instant?: string;
  payment?: Pagamento;
  client?: Cliente;
}