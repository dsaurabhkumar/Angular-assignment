import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ROUTES } from './config/routes.contant';
import { FirstCompComponent } from './first-module/first-comp/first-comp.component';
import { SecondCompComponent } from './second-module/second-comp/second-comp.component';


const routes: Routes = [
  {
    path: '', redirectTo: ROUTES.firstModule.route, pathMatch: 'full'
  },
  {
    path: ROUTES.firstModule.route,
    component: FirstCompComponent
  },
  {
    path: ROUTES.secondModule.route,
    component: SecondCompComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
