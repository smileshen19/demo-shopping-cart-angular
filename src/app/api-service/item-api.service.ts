import { Injectable } from '@angular/core';
import { IItem, Item } from '../model/item.model';
import { HttpService } from '../service/http.service';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService extends WebApiService<IItem, Item> {

  constructor(
    httpService: HttpService,
  ) {
    super('Item', Item, httpService);
  }
}
