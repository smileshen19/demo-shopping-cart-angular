import { UiModule } from './../ui/ui.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { AuthorityCheckComponent } from './authority-check/authority-check.component';
import { ItemManagementComponent } from './item-management/item-management.component';

@NgModule({
  declarations: [SellerComponent, AuthorityCheckComponent, ItemManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    SellerRoutingModule,
    UiModule,
  ],
})
export class SellerModule { }
