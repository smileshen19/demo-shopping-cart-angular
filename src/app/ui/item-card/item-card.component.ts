import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() name = '';
  @Input() price = null;
  @Input() src = noImageUrl;

  @Output() clickEvent = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clickEvent.emit();
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }

}
