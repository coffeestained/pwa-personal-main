import { Injectable } from '@angular/core';

type SuccessFailureSet =
| true
| false;

// TODO MULTI DEPTH ARRAY
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
    console.log('Local Storage Init');
    console.log(localStorage);
  }

  public set(key: string, item: any) : SuccessFailureSet {
    try {
      const toBeStored = this.encrypt(JSON.stringify(item));
      localStorage.setItem(key, toBeStored);
      return true;
    } catch (err) {
      return false;
    }
  }

  public get(key: string,) {
    try {
      const val = this.decrypt(localStorage.getItem(key) as string);
      return JSON.parse(val);
    } catch (err) {
      return false;
    }
  }

  private encrypt(val: string) {
    return val;
  }

  private decrypt(val: string) {
    return val;
  }
}
