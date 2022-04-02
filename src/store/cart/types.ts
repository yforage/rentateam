import { IProduct } from 'store/products/types';

export interface ISendOrder {
  address: Record<string, string>;
  products: IProduct[];
}
