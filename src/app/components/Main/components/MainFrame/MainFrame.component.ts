/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component} from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import {Router} from "@angular/router";

@Component({
  selector: 'main-frame',
  template: require('./MainFrame.component.html')
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
