import { ItemApiService } from './../../api-service/item-api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Item } from 'src/app/model/item.model';

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

  onItemClick(item) {
    alert(this.isCustomerLogin ? '您已登入，但商品詳細資料頁面施工中' : '要看商品詳細資料請先登入');
  }

}
