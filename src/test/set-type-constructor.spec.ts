import { SetTypeConstructor } from "../lib";

const setCtor: SetTypeConstructor<string, Set<string>> = Set;
const mySet = new setCtor(['apple', 'banana']);
console.log(mySet.has('banana')); // true
