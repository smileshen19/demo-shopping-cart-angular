import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AuthorityCheckComponent } from './authority-check/authority-check.component';
import { ItemManagementComponent } from './item-management/item-management.component';
import { SellerAdminGuardService } from '../service/seller-admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'itemmanagement', pathMatch: 'full' },
  { path: 'authority', component: AuthorityCheckComponent },
  { path: 'itemmanagement', component: ItemManagementComponent, canActivate: [SellerAdminGuardService] },
  { path: '**', redirectTo: 'itemmanagement', pathMatch: 'full' } // 萬用路由
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
