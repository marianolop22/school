import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    LoadingComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class ComponentsModule { }
