import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';

export interface IOrder {
  id: string;
  customer: Customer;
  order_products: OrdersProducts[];
  created_at: Date;
  updated_at: Date;
}
