type MyReadonly<T> = {
  readonly [p in keyof T] : T[p]
}