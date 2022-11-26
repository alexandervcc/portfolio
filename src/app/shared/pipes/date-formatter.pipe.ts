import { Pipe, PipeTransform } from '@angular/core';
import { MONTHS } from 'src/app/constants/months';

@Pipe({
  name: 'workDateFormat',
})
export class DateFormatterPipe implements PipeTransform {
  transform(value?: Date, ...args: unknown[]): string {
    if (!value) {
      return 'Present';
    }
    const timeValue = value as any;
    const date = new Date(timeValue.seconds * 1000);
    return date.getFullYear() + ' ' + MONTHS[date.getMonth()];
  }
}
