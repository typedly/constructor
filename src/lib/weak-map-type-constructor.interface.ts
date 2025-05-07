export interface WeakMapTypeConstructor<
  Key extends object,
  Value,
  MapType extends WeakMap<Key, Value>
> {
  new(entries?: [Key, Value][]): MapType;
}
