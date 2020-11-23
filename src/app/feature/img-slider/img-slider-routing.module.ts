import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImgSilderContainerComponent} from './img-silder-container.component';

const routes: Routes = [
  {
    path: '',
    component: ImgSilderContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImgSliderRoutingModule {
}
