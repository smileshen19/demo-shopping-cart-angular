import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authority-check',
  templateUrl: './authority-check.component.html',
  styleUrls: ['./authority-check.component.css']
})
export class AuthorityCheckComponent implements OnInit {

  pw = 'P@ssw0rd';

  constructor(
    private router: Router,
    private appService: AppService,
  ) { }

  ngOnInit() {
  }

  check() {
    if (this.pw === 'P@ssw0rd') {
      this.appService.adminLogin();
      this.router.navigateByUrl('seller/itemmanagement');
      alert('密碼正確，將導向管理頁面');
    } else {
      alert('密碼錯誤');
    }
  }
}
