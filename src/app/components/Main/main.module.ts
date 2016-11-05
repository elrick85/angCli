/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {NgModule} from "@angular/core";
import {MainFrameComponent} from './components/MainFrame/MainFrame.component';
import {DashboardComponent} from './components/Dashboard/Dashboard.component';
import {routing} from './main.routes';
import {GuardService} from "../../services/guard.service";
import {AuthService} from "../../services/auth.service";
import {DataTableComponent} from './components/data-table/data-table.component';
import {DataTableItemComponent} from './components/data-table-item/data-table-item.component';
import {BrowserModule} from "@angular/platform-browser";
import { DataTableHeaderComponent } from './components/data-table-header/data-table-header.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        MainFrameComponent,
        DashboardComponent,
        DataTableComponent,
        DataTableItemComponent,
        DataTableHeaderComponent
    ],
    providers: [GuardService, AuthService]
})
export class MainModule {
}
