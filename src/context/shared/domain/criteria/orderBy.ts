import { StringValueObject } from '../valueObject';

export class OrderBy extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
