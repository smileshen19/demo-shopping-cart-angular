import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-layout-top',
  templateUrl: './layout-top.component.html',
  styleUrls: ['./layout-top.component.css']
})
export class LayoutTopComponent implements OnInit {

  navShow = false;

  account = 'ssr';
  pw = 'a12345';

  isCustomerLogin = false;

  constructor(
    private appService: AppService,
  ) { }

  ngOnInit() {
    this.isCustomerLogin = this.appService.isCustomerLogin();
    this.appService.whenLoginChange().subscribe((isCustomerLogin) => {
      this.isCustomerLogin = isCustomerLogin;
    });
  }

  toggleNav() {
    this.navShow = !this.navShow;
  }

  toggleLogin(login: boolean) {
    this.appService.isCustomerLogin() ? this.appService.customerlogout() : this.appService.customerlogin(this.account, this.pw);
  }

}
