import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css'],
})
export class IndicatorsComponent implements OnInit {
  @Input('qtyItems') qtyItems?: number;
  numbers?: number[];

  ngOnInit(): void {
    if (this.qtyItems) {
      this.numbers = Array.from(Array(this.qtyItems - 1).keys()).map(
        (e) => e + 1
      );
      console.log('nums: ', this.qtyItems);
      console.log('arr: ', this.numbers);
    }
  }
}
