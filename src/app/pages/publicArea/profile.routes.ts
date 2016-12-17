/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginFrameComponent} from "./shared/loginFrame/loginFrame.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginFrameComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];