export interface SetTypeConstructor<Type, SetType extends Set<Type>> {
  new (iterable?: Iterable<Type>): SetType,
}
