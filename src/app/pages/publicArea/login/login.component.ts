/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component}   from '@angular/core';
import {Router}      from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  template: require('./login.component.html')
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
    this.navigate();
  }

  private navigate(): void {
    var authService = this.authService;

    authService.getLoginState().subscribe(val => {
      if (val) {
        let redirect = authService.redirectUrl ? authService.redirectUrl : '/';
        this.router.navigate([redirect]);
      }
    });
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.getLoginState() ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      this.navigate();
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
