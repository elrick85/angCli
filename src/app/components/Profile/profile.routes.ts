/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/Login/Login.component";
import {LoginFrameComponent} from "./components/LoginFrame/LoginFrame.component";

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

export const routing = RouterModule.forChild(routes);
