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

  totalItemsKinds = 0;
  totalAmount = 0;
  totalItems = 0;

  $destroy = new Subject<any>();

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private appService: AppService,
  ) { }

  ngOnInit() {
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
    if (this.appService.isCustomerLogin()) {
      alert('準備結帳');
    } else {
      alert('請先登入');
    }
  }

}
