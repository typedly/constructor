export interface WeakSetTypeConstructor<
  Type extends object,
  SetType extends WeakSet<Type> = WeakSet<Type>
> {
  new (values?: readonly Type[]): SetType;
}
