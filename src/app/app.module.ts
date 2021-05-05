import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FirstServiceService } from './core/first-service.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FirstModuleModule } from './first-module/first-module.module';
import { SecondModuleModule } from './second-module/second-module.module';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModuleModule,
    SecondModuleModule
  ],
  exports: [RouterModule],
  providers: [FirstServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
