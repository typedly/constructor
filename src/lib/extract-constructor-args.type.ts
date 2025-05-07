export type ExtractConstructorArgs<T extends new (...args: any) => any> =
  T extends new (value: any, ...args: infer A) => any ? A : never;
