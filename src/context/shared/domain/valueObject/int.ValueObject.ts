import { ValueObject } from './valueObject';

export abstract class IntValueObject extends ValueObject<number> {
  isBiggerThan(other: number): boolean {
    return this.value > other;
  }
}
