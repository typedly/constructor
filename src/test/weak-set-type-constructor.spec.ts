import { WeakSetTypeConstructor } from "../lib";

const weakSetCtor: WeakSetTypeConstructor<object, WeakSet<object>> = WeakSet;
const obj = {};
const myWeakSet = new weakSetCtor([obj]);
console.log(myWeakSet.has(obj)); // true
