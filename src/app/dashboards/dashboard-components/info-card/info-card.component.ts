import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html'
})
export class InfocardComponent {
  
  constructor() {}
  
@Input() clients = [];
  
}
