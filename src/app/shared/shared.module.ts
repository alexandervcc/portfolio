import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { ChipComponent } from './components/chip/chip.component';

@NgModule({
  declarations: [DateFormatterPipe, ChipComponent],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [
    CommonModule,
    BrowserModule,
    DateFormatterPipe,
    RouterModule,
    ChipComponent,
  ],
})
export class SharedModule {}
