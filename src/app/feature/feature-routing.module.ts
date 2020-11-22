import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then(m => m.CalculatorModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
  },
  {
    path: 'color-picker',
    loadChildren: () => import('./color-picker/color-picker.module').then(m => m.ColorPickerModule)
  },
  {
    path: 'countdown',
    loadChildren: () => import('./countdown/countdown.module').then(m => m.CountdownModule)
  },
  {
    path: 'dictionary',
    loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
