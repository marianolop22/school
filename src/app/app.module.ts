import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ServiceModule } from './services/service.module';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { ClassModule } from './class/class.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceModule,
    ComponentsModule,
    PagesModule,
    ClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
