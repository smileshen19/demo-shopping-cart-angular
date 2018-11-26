import { Component, OnInit } from '@angular/core';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent implements OnInit {

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

}
