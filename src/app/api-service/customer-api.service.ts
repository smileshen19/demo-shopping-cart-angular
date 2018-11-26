import { Customer } from './../model/customer.model';
import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { ICustomer } from '../model/customer.model';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService extends WebApiService<ICustomer, Customer> {

  constructor(
    httpService: HttpService,
  ) {
    super('Customer', Customer, httpService);
  }
}
