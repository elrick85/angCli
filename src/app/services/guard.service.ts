/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class GuardService implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url: string = state.url;

    return this.checkUrl(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.canActivate(route, state);
  }

  checkUrl(url: string): Observable<boolean> | boolean {
    var serv = this;
    serv.authService.redirectUrl = url;

    var loginState = serv.authService.getLoginState();
    loginState.subscribe(val => {
      if(!val){
        serv.router.navigate(['/login']);
      }
    });

    return loginState;
  }
}
