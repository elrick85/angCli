/**
 * Created by zauri_000 on 17.12.2016.
 */

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {GridModule} from '@progress/kendo-angular-grid';
import {DialogModule} from '@progress/kendo-angular-dialog';

import {DashboardComponent} from './dashboard.component';
import {DashboardService} from "./dashboard.service";
import {DataUploadComponent} from './data-upload/data-upload.component';
import {DetailPageComponent} from './detail-page/detail-page.component';
import {ComponentsModule} from "../../../components/components.module";

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DialogModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule
    ],
    declarations: [
        DashboardComponent,
        DataUploadComponent,
        DetailPageComponent
    ],
    providers: [DashboardService]
})
export class DashboardModule {
}