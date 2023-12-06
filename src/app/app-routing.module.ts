import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dynamic1Component } from './dynamic1/dynamic1.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';

const routes: Routes = [
  { path: "", component: Dynamic1Component, pathMatch: "full" },
  { path: "segundo", component: Dynamic2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
