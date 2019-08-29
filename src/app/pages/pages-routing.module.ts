import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

    { path: 'home', component: HomeComponent, children:[
        { path:'noticias', loadChildren: './news/news.module#NewsModule' },
        { path:'nosotros', loadChildren: './about/about.module#AboutModule' },
        { path:'contacto', loadChildren: './contact/contact.module#ContactModule' },
        { path:'cuadernocomunicados', loadChildren: './communications-notebook/communications-notebook.module#CommunicationsNotebookModule' },
        // { path:'', redirectTo: 'noticias', pathMatch:'full' },
        // { path: '**', pathMatch: 'full', redirectTo: 'servicios' }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
