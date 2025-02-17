import { CacheElement } from "./Cache.types";

export class DefaultCacheElement<T> implements CacheElement<T> {
  private tempData: T | null = null;

  fromData(formData: FormData | T): void {
    if(formData instanceof FormData){
      const data = Object.fromEntries(formData.entries()) as T;

      this.tempData = data;

      Object.assign(this, data);

      return;
    }
    const data = {...formData} as T;

    this.tempData = data;

    Object.assign(this, data);
  }

  toJSON(){
    return this.tempData;
  }
}
