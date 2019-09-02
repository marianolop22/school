import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HtmlInjectService,
  UserService,
  MessagingService,
  CommsService
} from "./service.index";
import { HttpClientModule } from "@angular/common/http";
//import { AdminGuard } from './admin.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HtmlInjectService,
    UserService, //todo lo referente al usuario
    MessagingService,
    CommsService //servicio de manejo de cuaderno de comunicados
  ]
})
export class ServiceModule { }
