/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Component} from '@angular/core';

@Component({
  selector: 'login-frame',
  template: require('./loginFrame.component.html')
})
export class LoginFrameComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
