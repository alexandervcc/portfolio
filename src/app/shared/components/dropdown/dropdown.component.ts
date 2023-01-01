import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from 'src/app/model/DropdownItem';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input('name') name: string = '';
  @Input('options') options: DropdownItem[] = [];
  @Output('selection') selection = new EventEmitter<string>();

  dropdownOpen: boolean = false;

  selectItem(item: string) {
    this.selection.emit(item);
    this.closeDropdown();
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }
}
