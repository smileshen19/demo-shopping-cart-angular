import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ShoppingCartService } from 'src/app/service/shopping-cart.service';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit, OnDestroy {

  isPurchasing = false;

  totalItemsKinds = 0;
  totalAmount = 0;
  totalItems = 0;

  $destroy = new Subject<any>();

  showDetail = false;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.isPurchasing = this.appService.isPurchasing();
    this.appService.whenPurchaseChange().subscribe((inPurchase) => {
      this.isPurchasing = inPurchase;
    });
    this.shoppingCartService.whenCartStatusChange()
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.totalItemsKinds = this.shoppingCartService.getTotalItemKindInCart();
        this.totalAmount = this.shoppingCartService.getTotalAmountInCart();
        this.totalItems = this.shoppingCartService.getTotalItemCountInCart();
      });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.unsubscribe();
  }

  goPurchase() {
    if (!this.totalItems) {
      alert('購物車內無商品');
      return;
    }
    if (!this.appService.isCustomerLogin()) {
      alert('請先登入');
      return;
    }
    // alert('準備結帳');
    this.showDetail = false;
    this.router.navigateByUrl('/buyer/purchase');
  }

}
