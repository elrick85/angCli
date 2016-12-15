/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {NgModule} from "@angular/core";
import {MainFrameComponent} from './components/MainFrame/MainFrame.component';
import {DashboardComponent} from './components/Dashboard/Dashboard.component';
import {routes} from './main.routes';
import {GuardService} from "../../services/guard.service";
import {AuthService} from "../../services/auth.service";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {DashboardService} from "./components/Dashboard/dashboard.service";
import {DataUploadComponent} from './components/data-upload/data-upload.component';
import {FormsModule} from "@angular/forms";
import {DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import {RouterModule} from "@angular/router";
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        RouterModule.forChild(routes),
        HttpModule,
        FormsModule
    ],
    declarations: [
        MainFrameComponent,
        DashboardComponent,
        DataUploadComponent,
        DashboardItemComponent
    ],
    providers: [GuardService, AuthService, DashboardService]
})
export class MainModule {
}
