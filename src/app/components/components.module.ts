/**
 * Created by zauri_000 on 06.01.2017.
 */

import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardDetailComponent} from "./dashboard-detail/dashboard-detail.component";
import {NgModule} from "@angular/core";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DashboardDetailComponent
    ],
    declarations: [
        DashboardDetailComponent
    ]
})
export class ComponentsModule {
}