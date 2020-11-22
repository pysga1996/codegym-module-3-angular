import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
  },
  {
    path: ':id',
    component: BlogDetailComponent
  },
  {
    path: ':id/edit',
    component: BlogEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
