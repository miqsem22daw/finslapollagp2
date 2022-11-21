import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Array_json } from './array-json';
import { MenuComponent } from './menu.component';
import { BarChartComponent } from './grafics';

const routes: Routes = [
  { path: '', redirectTo: 'menu', pathMatch: 'full'},
  { path: 'menu', component: MenuComponent},
  { path: 'dades', component: Array_json},
  {path: 'grafics', component: BarChartComponent}
//   { path: 'paginaPais', component: },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
