import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyerRoutingModule } from './buyer-routing.module';
import { BuyerComponent } from './buyer.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

@NgModule({
  declarations: [BuyerComponent, ItemsComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    UiModule,
  ]
})
export class BuyerModule { }
