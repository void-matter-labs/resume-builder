export interface Cache<CacheKeys extends string> {
  getElement<T>(key: CacheKeys): CacheElement<T> | undefined;
  setElement<T>(key: CacheKeys, element: CacheElement<T>): void;
  getObserver(key: CacheKeys): CacheObserver | undefined;
}


export interface CacheObserver{
  subscribe(listener: ()=>void): void;
  unsubscribe(listener: ()=>void): void;
  emit(): void;
}

export interface CacheElement<T, R = any> {
  fromData(formData: FormData | R): void;
  toJSON(): T | undefined | null;
}
