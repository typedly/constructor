export interface WeakSetTypeConstructor<
  Type extends object,
  SetType extends WeakSet<Type> = WeakSet<Type>
> {
  new (iterable?: Iterable<Type>): SetType;
}