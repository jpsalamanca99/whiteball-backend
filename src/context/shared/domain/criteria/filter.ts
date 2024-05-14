import { FilterField } from './filterField';
import { FilterOperator } from './filterOperator';
import { FilterValue } from './filterValue';
import { InvalidArgumentError } from '../error/invalidArgument.error';

export class Filter {
  readonly field: FilterField;
  readonly operator: FilterOperator;
  readonly value: FilterValue;

  constructor(
    field: FilterField,
    operator: FilterOperator,
    value: FilterValue
  ) {
    this.field = field;
    this.operator = operator;
    this.value = value;
  }

  static fromValues(values: Map<string, string>): Filter {
    const field = values.get('field');
    const operator = values.get('operator');
    const value = values.get('value');

    if (!field || !operator || !value) {
      throw new InvalidArgumentError('The filter is invalid');
    }

    return new Filter(
      new FilterField(field),
      FilterOperator.fromValue(operator),
      new FilterValue(value)
    );
  }
}
