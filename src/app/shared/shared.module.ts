import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';
import { ChipComponent } from './components/chip/chip.component';
import { LoadingCircleComponent } from './components/loading-circle/loading-circle.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    DateFormatterPipe,
    ChipComponent,
    LoadingCircleComponent,
    DropdownComponent,
  ],
  imports: [CommonModule, BrowserModule, RouterModule],
  exports: [
    CommonModule,
    BrowserModule,
    DateFormatterPipe,
    RouterModule,
    ChipComponent,
    LoadingCircleComponent,
    DropdownComponent,
  ],
})
export class SharedModule {}
