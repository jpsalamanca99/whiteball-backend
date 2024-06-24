import { OrderType, OrderTypes } from './orderType';
import { OrderBy } from './orderBy';

export class Order {
  readonly orderBy: OrderBy;
  readonly orderType: OrderType;

  constructor(orderBy: OrderBy, orderType: OrderType) {
    this.orderBy = orderBy;
    this.orderType = orderType;
  }

  static none(): Order {
    return new Order(new OrderBy(''), new OrderType(OrderTypes.NONE));
  }

  static asc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.ASC));
  }

  static desc(orderBy: string): Order {
    return new Order(new OrderBy(orderBy), new OrderType(OrderTypes.DESC));
  }

  public hasOrder(): boolean {
    return !this.orderType.isNone();
  }
}
