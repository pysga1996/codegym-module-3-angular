import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [BlogComponent, BlogDetailComponent, BlogEditComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
