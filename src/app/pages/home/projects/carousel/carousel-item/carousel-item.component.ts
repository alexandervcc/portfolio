import { Component, Input } from '@angular/core';
import { CarouselData } from 'src/app/model/CarouselData';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css'],
})
export class CarouselItemComponent {
  @Input('item') item?: CarouselData;
  @Input('active') active = '';
}
