import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';


@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule {
}
