import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFormatterPipe } from './shared/pipes/date-formatter.pipe';

@NgModule({
  declarations: [DateFormatterPipe],
  imports: [CommonModule, BrowserModule, NgbModule],
  exports: [CommonModule, BrowserModule, NgbModule, DateFormatterPipe],
})
export class SharedModule {}
