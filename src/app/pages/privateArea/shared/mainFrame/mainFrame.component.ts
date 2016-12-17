/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component} from '@angular/core';
import {Router} from "@angular/router";

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'main-frame',
  template: require('./mainFrame.component.html')
})
export class MainFrameComponent {
  public hello: string;

  constructor(public authService: AuthService, public router: Router) {
    this.hello = 'Hello World!';
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
