import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HtmlInjectService,
  UserService,
  CommsService,
  SchoolService
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
    CommsService, //servicio de manejo de cuaderno de comunicados
    SchoolService //servicio para el manejo de la info de escuela
  ]
})
export class ServiceModule { }
