import { AppService } from './app.service';
import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private static _cart: Map<string, { item: Item, count: number }> = new Map();

  private $_onStatusChange = new Subject<any>();

  constructor(
    private appService: AppService,
  ) {
    this.appService.whenLoginChange().subscribe((login) => {
      if (!login) {
        ShoppingCartService._cart.clear();
        this.$_onStatusChange.next();
      }
    });
  }

  add(item: Item, count: number) {
    if (!count || isNaN(count)) { alert('add 數量錯誤'); return; }
    const cart = ShoppingCartService._cart;
    if (cart.has(item.ID)) {
      const status = cart.get(item.ID);
      status.count += count || 0;
    } else {
      cart.set(item.ID, { item: JSON.parse(JSON.stringify(item)), count: count });
    }
    this.$_onStatusChange.next();
  }

  remove(item: Item, count: number) {
    if (!count || isNaN(count)) { alert('remove 數量錯誤'); return; }
    const cart = ShoppingCartService._cart;
    if (cart.has(item.ID)) {
      const status = cart.get(item.ID);
      status.count -= count || 0;
      if (status.count <= 0) {
        cart.delete(item.ID);
      }
    } else {
      alert('remove 購物車內無此商品');
      return;
    }
    this.$_onStatusChange.next();
  }

  whenCartStatusChange() {
    return this.$_onStatusChange.asObservable();
  }

  getTotalItemKindInCart(): number {
    const cart = ShoppingCartService._cart;
    return cart.size;
  }

  getTotalItemCountInCart(): number {
    let total = 0;
    const cart = ShoppingCartService._cart;
    cart.forEach((itemStatus, itemID) => {
      total += itemStatus.count || 0;
    });
    return total;
  }

  getTotalAmountInCart(): number {
    let total = 0;
    const cart = ShoppingCartService._cart;
    cart.forEach((itemStatus, itemID) => {
      total += itemStatus.count * (itemStatus.item.Price || 0);
    });
    return total;
  }

}
