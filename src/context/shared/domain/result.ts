import { Nullable } from './nulleable';

export class Result<T> {
  data: Nullable<T> = null;
  message: Array<string>;
  errors?: Array<{ [key: string]: [msg: string] } | string>;
  statusCode = 0;
  date: Date;
  count: number = 0;

  constructor() {
    this.message = new Array<string>();
    this.date = new Date();
  }

  setData(data: T): Result<T> {
    this.data = data;
    if (typeof data === 'object' && data !== null) {
      this.count = 1;
    } else if (Array.isArray(data)) {
      this.count = data.length;
    }

    return this;
  }

  addMessage(msg: string): Result<T> {
    this.message.push(msg);
    return this;
  }

  addError(error: string | { [key: string]: [msg: string] }): Result<T> {
    if (this.errors) {
      this.errors.push(error);
    } else {
      this.errors = [error];
    }
    return this;
  }
}
