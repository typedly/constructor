import { MapTypeConstructor } from "../lib";

const mapCtor: MapTypeConstructor<string, number, Map<string, number>> = Map;
const myMap = new mapCtor([['a', 1], ['b', 2]]);
console.log(myMap.get('a')); // 1
