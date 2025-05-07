export interface Constructor<T, Args extends readonly any[] = any[]> {
  new (...args: Args): T;
}
