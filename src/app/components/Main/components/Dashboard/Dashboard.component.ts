/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */


import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  template: require('./Dashboard.component.html')
})
export class DashboardComponent {
  public hello: string;

  constructor() {
    this.hello = 'Hello World!';
  }
}
