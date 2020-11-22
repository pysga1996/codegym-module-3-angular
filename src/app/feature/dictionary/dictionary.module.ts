import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DictionaryRoutingModule} from './dictionary-routing.module';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryService} from '../../service/dictionary.service';


@NgModule({
  declarations: [DictionaryDetailComponent, DictionaryPageComponent],
  imports: [
    CommonModule,
    DictionaryRoutingModule
  ],
  providers: [DictionaryService]
})
export class DictionaryModule {
}
