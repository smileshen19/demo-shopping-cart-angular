import { Component, OnInit } from '@angular/core';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }

}
