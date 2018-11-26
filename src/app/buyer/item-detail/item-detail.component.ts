import { ShoppingCartService } from './../../service/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { ItemMaintainComponent } from 'src/app/seller/item-maintain/item-maintain.component';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent extends ItemMaintainComponent {

  buyCount = 1;

  constructor(
    itemApiService: ItemApiService,
    router: Router,
    activatedRoute: ActivatedRoute,
    formBuilder: FormBuilder,
    private shoppingCartService: ShoppingCartService,
  ) {
    super(
      itemApiService,
      router,
      activatedRoute,
      formBuilder
    );
    this.isBuyerPage = true;
  }

  afterRouteParamsChange() {
    this.buyCount = 1;
  }

  addToCart() {
    if (!this.buyCount || isNaN(this.buyCount) || this.buyCount < 1) {
      alert('數量錯誤，至少須為1，且為整數');
      return;
    } else if (('' + this.buyCount).indexOf('.') > -1) {
      alert('數量須為整數');
      return;
    }
    this.buyCount = Math.floor(this.buyCount);
    this.shoppingCartService.add(this.item, this.buyCount);
  }

  back() {
    this.router.navigateByUrl('buyer/items');
  }

}
