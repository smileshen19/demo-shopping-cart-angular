import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { ISale, Sale } from '../model/sale.model';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root'
})
export class SaleApiService extends WebApiService<ISale, Sale>  {

  constructor(
    httpService: HttpService,
  ) {
    super('Sale', Sale, httpService);
  }
}
