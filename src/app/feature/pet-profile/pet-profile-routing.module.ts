import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PetProfileComponent} from './pet-profile.component';

const routes: Routes = [
  {
    path: '',
    component: PetProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetProfileRoutingModule {
}
