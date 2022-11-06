import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, BrowserModule, NgbModule],
  exports: [CommonModule, BrowserModule, NgbModule],
})
export class SharedModule {}
