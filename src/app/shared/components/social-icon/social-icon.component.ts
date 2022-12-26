import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.css'],
})
export class SocialIconComponent {
  @Input('icon') iconClass: string = '';
  @Input('url') url: string = '';
  
}
