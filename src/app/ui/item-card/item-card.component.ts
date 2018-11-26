import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/model/item.model';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() item: Item;

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
