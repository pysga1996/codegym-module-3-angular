import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PetProfileRoutingModule} from './pet-profile-routing.module';
import {PetProfileComponent} from './pet-profile.component';


@NgModule({
  declarations: [PetProfileComponent],
  imports: [
    CommonModule,
    PetProfileRoutingModule
  ]
})
export class PetProfileModule {
}
