import { Pedido } from "./pedido";

export class Pagamento {
  id?: number;
  status?: string;
  type?: string;
  paymentDate?: string;
  order?: Pedido;
}