import { WeakMapTypeConstructor } from "../lib";

const weakMapCtor: WeakMapTypeConstructor<object, string, WeakMap<object, string>> = WeakMap;
const keyObj = {};
const myWeakMap = new weakMapCtor([[keyObj, 'value']]);
console.log(myWeakMap.get(keyObj)); // "value"
