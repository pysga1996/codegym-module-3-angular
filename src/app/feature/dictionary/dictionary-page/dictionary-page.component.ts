import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../../service/dictionary.service';
import {IWord} from '../../../model/word.interface';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.scss']
})
export class DictionaryPageComponent implements OnInit {
  listWord: IWord[] = [];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
  }

}
