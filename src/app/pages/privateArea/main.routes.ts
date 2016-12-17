/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Route} from "@angular/router";
import {MainFrameComponent} from './shared/mainFrame/mainFrame.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GuardService} from '../../services/guard.service';

export const routes: Route[] = [
  {
    path: '',
    component: MainFrameComponent,
    canActivate: [GuardService],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivateChild: [GuardService]
      }
    ]
  }
];
