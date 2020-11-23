import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { ImgSlideComponent } from './img-slide/img-slide.component';
import {ImgSliderRoutingModule} from './img-slider-routing.module';
import {ImgSilderContainerComponent} from './img-silder-container.component';

@NgModule({
  imports: [
    CommonModule,
    ImgSliderRoutingModule
  ],
  declarations: [ImgSliderComponent, ImgSlideComponent, ImgSilderContainerComponent],
  exports: [ImgSliderComponent, ImgSlideComponent, ImgSilderContainerComponent]
})
export class ImgSliderModule { }
