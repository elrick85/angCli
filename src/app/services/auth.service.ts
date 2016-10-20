/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

enum IsAuth {
  Yes = 1,
  No = 0
}

type FooId = IsAuth & string;

@Injectable()
export class AuthService {
  // store the URL so we can redirect after logging in
  redirectUrl: string;

  isAuth: string = 'isAuth';

  login(): Observable<boolean> {
    let flag: string = IsAuth.Yes as FooId;
    return Observable.of(true).delay(1000).do(val => localStorage.setItem(this.isAuth, flag));
  }

  logout(): void {
    let flag: string = IsAuth.No as FooId;
    localStorage.setItem(this.isAuth, flag);
  }

  getLoginState(): Observable<boolean> {
    let item: boolean = parseInt(localStorage.getItem(this.isAuth), 0) > 0;
    return Observable.fromPromise(Promise.resolve(item));
  }
}
