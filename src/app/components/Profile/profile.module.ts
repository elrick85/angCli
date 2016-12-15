/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {LoginComponent} from "./components/Login/Login.component";
import {LoginFrameComponent} from "./components/LoginFrame/LoginFrame.component";
import {routes} from './profile.routes';
import {GuardService} from "../../services/guard.service";
import {AuthService} from "../../services/auth.service";
import {FormsModule}  from '@angular/forms';
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FormsModule,
        BrowserModule
    ],
    declarations: [
        LoginFrameComponent,
        LoginComponent,
    ],
    providers: [GuardService, AuthService]
})
export class LoginModule {
}
