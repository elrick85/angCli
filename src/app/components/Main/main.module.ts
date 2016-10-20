/**
 * Created by Zaur_Ismailov on 10/19/2016.
 */

import {NgModule} from "@angular/core";
import {MainFrameComponent} from './components/MainFrame/MainFrame.component';
import {DashboardComponent} from './components/Dashboard/Dashboard.component';
import {routing} from './main.routes';
import {GuardService} from "../../services/guard.service";
import {AuthService} from "../../services/auth.service";

@NgModule({
  imports: [
    routing
  ],
  declarations: [
    MainFrameComponent,
    DashboardComponent
  ],
  providers: [GuardService, AuthService]
})
export class MainModule {}
