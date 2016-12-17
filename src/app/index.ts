import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './root.component';

import {LoginModule} from './pages/publicArea/profile.module';
import {MainModule} from './pages/privateArea/main.module';

import {routes} from './routes';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        BrowserModule,
        LoginModule,
        MainModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        RootComponent
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}
