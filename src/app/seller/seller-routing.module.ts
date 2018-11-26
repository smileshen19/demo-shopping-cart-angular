import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorityCheckComponent } from './authority-check/authority-check.component';
import { ItemManagementComponent } from './item-management/item-management.component';
import { SellerAdminGuardService } from '../service/seller-admin-guard.service';
import { ItemMaintainComponent } from './item-maintain/item-maintain.component';

const routes: Routes = [
  { path: '', redirectTo: 'item-management', pathMatch: 'full' },
  { path: 'authority', component: AuthorityCheckComponent },
  { path: 'item-management', component: ItemManagementComponent, canActivate: [SellerAdminGuardService] },
  { path: 'item-maintain/:id', component: ItemMaintainComponent, canActivate: [SellerAdminGuardService] },
  { path: '**', redirectTo: 'item-management', pathMatch: 'full' } // 萬用路由
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
