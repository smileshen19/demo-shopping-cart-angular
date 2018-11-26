import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private static _appStatus = {
    isCustomerLogin: false,
    isAdmin: false,
    isPurchasing: false,
  };

  private _$onLoginChange = new Subject<boolean>();
  private _$onPurchaseChange = new Subject<boolean>();

  constructor() { }

  isCustomerLogin(): boolean {
    return AppService._appStatus.isCustomerLogin;
  }

  customerlogin(account: string, logout: string) {
    AppService._appStatus.isCustomerLogin = true;
    this._$onLoginChange.next(AppService._appStatus.isCustomerLogin);
  }

  customerlogout() {
    AppService._appStatus.isCustomerLogin = false;
    this._$onLoginChange.next(AppService._appStatus.isCustomerLogin);
  }

  whenLoginChange(): Observable<boolean> {
    return this._$onLoginChange.asObservable();
  }

  isAdmin(): boolean {
    return AppService._appStatus.isAdmin;
  }

  adminLogin(): void {
    AppService._appStatus.isAdmin = true;
  }

  isPurchasing(): boolean {
    return AppService._appStatus.isPurchasing;
  }

  whenPurchaseChange(): Observable<boolean> {
    return this._$onPurchaseChange.asObservable();
  }

  purchaseStart() {
    AppService._appStatus.isPurchasing = true;
    this._$onPurchaseChange.next(true);
  }

  purchaseEnd() {
    AppService._appStatus.isPurchasing = false;
    this._$onPurchaseChange.next(false);
  }
}
