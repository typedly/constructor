import { ExtractConstructorArgs } from "../lib";

class MyData {
  constructor(value: number, unit: string, verbose: boolean) {}
}

type Args = ExtractConstructorArgs<typeof MyData>; // type Args = [unit: string, verbose: boolean]
