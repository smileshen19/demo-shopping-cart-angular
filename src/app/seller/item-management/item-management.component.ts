import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router } from '@angular/router';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-item-management',
  templateUrl: './item-management.component.html',
  styleUrls: ['./item-management.component.css']
})
export class ItemManagementComponent implements OnInit {

  items: Item[] = [];

  constructor(
    private itemApiService: ItemApiService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.itemApiService.getAll().subscribe((items) => { this.items = items; });
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }

  createItem() {
    this.router.navigateByUrl('seller/item-maintain/create');
  }

  updateItem(item: Item) {
    this.router.navigateByUrl(`seller/item-maintain/${item.ID}`);
  }

  deleteItem(item: Item) {
    alert(`刪除item: ${item.ID}`);
    // this.router.navigateByUrl(`seller/item-maintain/${item.ID}`);
  }

}
