export interface ConstrainedConstructor<
  T,
  I extends T = T,
  Args extends readonly any[] = any[]
> {
  new (...args: Args): I;
}
