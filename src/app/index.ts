import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RootComponent} from './components/Root/root.component';

import {LoginModule} from './components/Profile/profile.module';
import {MainModule} from './components/Main/main.module';

import {routing} from './routes';

@NgModule({
  imports: [
    BrowserModule,
    LoginModule,
    MainModule,
    routing
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
