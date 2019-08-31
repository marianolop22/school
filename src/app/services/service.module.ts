import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HtmlInjectService,
  UserService,
  MessagingService
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
    UserService,
    MessagingService
  ]
})
export class ServiceModule { }
