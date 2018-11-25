import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy {

  isCustomerLogin = false;

  items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ];

  private $destroy = new Subject<any>();

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.isCustomerLogin = this.appService.isCustomerLogin();
    this.appService.whenLoginChange().pipe(takeUntil(this.$destroy)).subscribe((isCustomerLogin) => {
      this.isCustomerLogin = isCustomerLogin;
    });
  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.unsubscribe();
  }

  onItemClick(item) {
    alert(this.isCustomerLogin ? '您已登入，但商品詳細資料頁面施工中' : '要看商品詳細資料請先登入');
  }

}
