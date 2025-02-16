import { Cache, CacheElement, CacheObserver } from "./Cache.types";

interface CacheConfig<T> {
  element: CacheElement<T>;
  observer?: CacheObserver;
}

export class DefaultCache<CacheKeys extends string>
  extends Map<CacheKeys,CacheConfig<any>>
  implements Cache<CacheKeys>
{
  getElement<T>(key: CacheKeys): CacheElement<T> | undefined {
    return this.get(key)?.element
  }
  setElement<T>(key: CacheKeys, element: CacheElement<T>): void {
    if(this.has(key)){
      this.get(key)!.element = element

      return
    }

    this.set(key, {element})
  }
  getObserver(_key: CacheKeys): CacheObserver {
    throw new Error("Method not implemented.");
  }

}
