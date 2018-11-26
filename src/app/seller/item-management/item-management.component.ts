import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemApiService } from 'src/app/api-service/item-api.service';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private itemApiService: ItemApiService
  ) { }

  ngOnInit() {
    this.itemApiService.getAll().subscribe((items) => { this.items = items; });
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }

}
