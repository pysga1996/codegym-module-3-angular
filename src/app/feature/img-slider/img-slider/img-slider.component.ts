import {
  Component,
  OnInit,
  ViewEncapsulation,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef, AfterViewInit
} from '@angular/core';
import {ImgSlideComponent} from '../img-slide/img-slide.component';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent>;
  component;
  activeIndex = 0;

  constructor(private cdref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.component = this.slides.first;
  }

  previous(): void {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  next(): void {
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    this.component = this.slides.toArray()[this.activeIndex];
  }

  ngAfterViewInit(): void {
    this.cdref.detectChanges();
  }

}
