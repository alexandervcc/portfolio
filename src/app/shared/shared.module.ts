import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule } from '@angular/router';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

@NgModule({
  declarations: [DateFormatterPipe],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [CommonModule, BrowserModule, DateFormatterPipe, RouterModule],
})
export class SharedModule {}
