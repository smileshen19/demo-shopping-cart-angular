import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { AuthorityCheckComponent } from './authority-check/authority-check.component';
import { ItemManagementComponent } from './item-management/item-management.component';
import { ItemMaintainComponent } from './item-maintain/item-maintain.component';

@NgModule({
  declarations: [SellerComponent, AuthorityCheckComponent, ItemManagementComponent, ItemMaintainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SellerRoutingModule,
    UiModule,
  ],
})
export class SellerModule { }
