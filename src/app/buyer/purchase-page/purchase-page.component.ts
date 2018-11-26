import { AppService } from 'src/app/service/app.service';
import { SaleDetail } from './../../model/sale.model';
import { ShoppingCartService } from './../../service/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemApiService } from 'src/app/api-service/item-api.service';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { Sale } from 'src/app/model/sale.model';

const noImageUrl = './assets/image/noimage.jpg';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent implements OnInit, OnDestroy {

  sale = new Sale();
  totalAmount = 0;

  constructor(
    private itemApiService: ItemApiService,
    private shoppingCartService: ShoppingCartService,
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.appService.purchaseStart();
    const itemsInCart = this.shoppingCartService.getItemsInCart();
    itemsInCart.forEach((status) => {
      const detail = new SaleDetail();
      detail.ItemID = status.item.ID;
      detail.ItemName = status.item.Name;
      detail.Unit = status.item.Unit;
      detail.Price = status.item.Price;
      detail.SalePrice = status.item.Price;
      detail.Qty = status.count;
      detail.Amount = (detail.Price || 0) * (detail.Qty || 0);
      detail.Str1 = status.item.Str1;
      this.sale.SaleDetails.push(detail);
    });
    this.calculateTotalAmount();
  }

  ngOnDestroy(): void {
    this.appService.purchaseEnd();
  }

  onImageError(event) {
    event.target.src = noImageUrl;
  }

  calculateTotalAmount() {
    this.totalAmount = 0;
    this.sale.SaleDetails.forEach((detail) => {
      this.totalAmount += detail.Amount;
    });
  }

  minusQty(detail: SaleDetail) {
    if (detail.Qty === 1) {
      return;
    }
    detail.Qty--;
    detail.Amount = detail.Price * detail.Qty;
    this.calculateTotalAmount();
  }

  plusQty(detail: SaleDetail) {
    detail.Qty++;
    detail.Amount = detail.Price * detail.Qty;
    this.calculateTotalAmount();
  }

}
