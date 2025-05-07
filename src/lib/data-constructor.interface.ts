export interface DataConstructor<
  Value,
  DataType,
  DataInstance extends DataType,
  Args extends readonly any[] = any[]
> {
  new (value: Value, ...args: Args): DataInstance;
}
