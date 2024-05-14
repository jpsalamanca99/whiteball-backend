import { EnumValueObject } from '../valueObject/enum.ValueObject';
import { InvalidArgumentError } from '../error/invalidArgument.error';

export enum Operator {
  EQUALS = '=',
  NOT_EQUALS = '!=',
  GREATER_THAN = '>',
  LESS_THAN = '<',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS',
}

export class FilterOperator extends EnumValueObject<string> {
  constructor(value: string) {
    super(value, Object.values(Operator));
  }

  static fromValue(value: string): FilterOperator {
    for (const operatorValue of Object.values(Operator)) {
      if (operatorValue === value) {
        return new FilterOperator(operatorValue);
      }
    }

    throw new InvalidArgumentError(`Invalid filter operator: ${value}`);
  }

  public isPositive(): boolean {
    return this.value !== Operator.NOT_EQUALS && this.value !== Operator.NOT_CONTAINS;
  }

  protected throwErrorForInvalidValue(value: Operator): void {
    throw new InvalidArgumentError(`Invalid filter operator: ${value}`);
  }

  static equal() {
    return this.fromValue(Operator.EQUALS);
  }
}
