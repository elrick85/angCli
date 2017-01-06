/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {Route} from "@angular/router";
import {MainFrameComponent} from './shared/mainFrame/mainFrame.component';
import {GuardService} from '../../services/guard.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DetailPageComponent} from "./dashboard/detail-page/detail-page.component";

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
            },
            {
                path: 'dashboard/:id',
                component: DetailPageComponent,
                canActivateChild: [GuardService]
            }
        ]
    }
];
