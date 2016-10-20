/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Routes, RouterModule, Route} from "@angular/router";
import {MainFrameComponent} from './components/MainFrame/MainFrame.component';
import {DashboardComponent} from './components/Dashboard/Dashboard.component';
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

export const routing = RouterModule.forChild(routes);
