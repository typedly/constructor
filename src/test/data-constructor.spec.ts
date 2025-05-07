import { DataConstructor } from "../lib";

interface DataCore<T> {
  value: T;
  set(value: T): void;
}

class Data<T> implements DataCore<T> {
  constructor(public value: T) {}
  set(value: T) {
    this.value = value;
  }
}

const dataCtor: DataConstructor<number, DataCore<number>, Data<number>, []> = Data;
const data = new dataCtor(123);
console.log(data.value); // 123
