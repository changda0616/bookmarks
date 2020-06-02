import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'ppl-list', loadChildren: () => import('./ppl-list/ppl-list.module').then(m => m.PplListModule) },
  { path: '', redirectTo: 'ppl-list', pathMatch: 'full' },
  { path: '**', redirectTo: 'ppl-list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
