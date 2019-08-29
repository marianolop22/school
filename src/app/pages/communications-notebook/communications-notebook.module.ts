import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationsNotebookComponent } from './communications-notebook.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CommunicationsNotebookComponent }
]

@NgModule({
  declarations: [
    CommunicationsNotebookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CommunicationsNotebookModule { }