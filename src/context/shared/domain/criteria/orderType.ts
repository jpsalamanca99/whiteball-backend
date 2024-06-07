import { EnumValueObject } from '../valueObject/enum.ValueObject';
import { InvalidArgumentError } from '../error/invalidArgument.error';

export enum OrderTypes {
  ASC = 'asc',
  DESC = 'desc',
  NONE = 'none'
}

export class OrderType extends EnumValueObject<OrderTypes> {
  constructor(value: OrderTypes) {
    super(value, Object.values(OrderTypes));
  }

  public static fromValue(value: string): OrderType {
    const orderValues = Object.values(OrderTypes) as string[];
    if (orderValues.includes(value)) {
      return new OrderType(value as OrderTypes);
    } else {
      throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
  }
  
  public isNone(): boolean {
    return this.value === OrderTypes.NONE;
  }
  
  protected throwErrorForInvalidValue(value: OrderTypes): void {
    throw new InvalidArgumentError(`The order type ${value} is invalid`);
  }
}

