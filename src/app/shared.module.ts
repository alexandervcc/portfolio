import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateFormatterPipe } from './shared/pipes/date-formatter.pipe';

@NgModule({
  declarations: [DateFormatterPipe],
  imports: [CommonModule, BrowserModule],
  exports: [CommonModule, BrowserModule, DateFormatterPipe],
})
export class SharedModule {}
