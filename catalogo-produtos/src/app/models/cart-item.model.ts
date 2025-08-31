import { Produto } from "./product.model";

export interface ItemCarrinho {
  product: Produto;
  quantity: number;
}
