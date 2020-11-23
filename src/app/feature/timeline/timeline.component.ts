import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../../service/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(target): void {
    this.output = this.dateUtilService.getDiffToNow(target.value);
  }

}
