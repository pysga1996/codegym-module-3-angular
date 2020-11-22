import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GalleryRoutingModule} from './gallery-routing.module';
import {ImageGalleryComponent} from './image-gallery.component';
import {ImageCardComponent} from './image-card/image-card.component';
import {GalleryConfig} from './token';


@NgModule({
  declarations: [ImageGalleryComponent, ImageCardComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  providers: [{provide: GalleryConfig, useValue: 2}]
})
export class GalleryModule {
}
