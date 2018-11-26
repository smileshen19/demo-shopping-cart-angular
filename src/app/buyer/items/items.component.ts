import { ItemApiService } from './../../api-service/item-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Item } from 'src/app/model/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {

  isCustomerLogin = false;

  items: Item[] = [];

  private $destroy = new Subject<any>();

  constructor(
    private router: Router,
    private appService: AppService,
    private itemApiService: ItemApiService
  ) { }

  ngOnInit() {
    this.isCustomerLogin = this.appService.isCustomerLogin();
    this.appService.whenLoginChange().pipe(takeUntil(this.$destroy)).subscribe((isCustomerLogin) => {
      this.isCustomerLogin = isCustomerLogin;
    });
    this.itemApiService.getAll().subscribe((items) => { this.items = items; });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.unsubscribe();
  }

  onItemClick(item: Item) {
    this.router.navigateByUrl(`buyer/item/${item.ID}`); // 結帳時再登入即可
    // if (this.isCustomerLogin) {
    //   this.router.navigateByUrl(`buyer/item/${item.ID}`);
    // } else {
    //   alert('要看商品詳細資料請先登入');
    // }
  }

}
