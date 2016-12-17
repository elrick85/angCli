/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";

import {routes} from './main.routes';

import {MainFrameComponent} from './shared/mainFrame/mainFrame.component';

import {GuardService} from "../../services/guard.service";
import {AuthService} from "../../services/auth.service";

import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forChild(routes),
        HttpModule,
        DashboardModule
    ],
    declarations: [
        MainFrameComponent
    ],
    providers: [GuardService, AuthService]
})
export class MainModule {
}
