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
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';


import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireAuthModule } from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ServiceModule,
    ComponentsModule,
    PagesModule,
    ClassModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, //base de datos
    AngularFireMessagingModule, //para mensajes push
    AngularFireAuthModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
