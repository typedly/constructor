import {
  ConstrainedConstructor,
  DataConstructor,
  MapTypeConstructor,
  SetTypeConstructor,
  WeakMapTypeConstructor,
  WeakSetTypeConstructor,
} from '.';

export namespace Typedly {
  export namespace Constructor {
    export type Constrained<T, I extends T = T, Args extends readonly any[] = any[]>  = ConstrainedConstructor<T, I, Args>;
    export type Data<Value, DataType, DataInstance extends DataType, Args extends readonly any[] = any[]>  = DataConstructor<Value, DataType, DataInstance, Args>;
    export type MapType<Key, Value, MapType extends Map<Key, Value>>  = MapTypeConstructor<Key, Value, MapType>;
    export type SetType<Type, SetType extends Set<Type>>  = SetTypeConstructor<Type, SetType>;
    export type WeakMapType<Key extends object, Value, MapType extends WeakMap<Key, Value>> = WeakMapTypeConstructor<Key, Value, MapType>;
    export type WeakSetType<Type extends object, SetType extends WeakSet<Type> = WeakSet<Type>>  = WeakSetTypeConstructor<Type, SetType>;
  }
}
