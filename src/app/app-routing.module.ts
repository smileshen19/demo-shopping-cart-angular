import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'buyer', pathMatch: 'full' },
  { path: 'buyer', loadChildren: './buyer/buyer.module#BuyerModule' },
  { path: 'seller', loadChildren: './seller/seller.module#SellerModule' },
  { path: '**', redirectTo: 'buyer', pathMatch: 'full' } // 萬用路由
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        enableTracing: true, // enableTracing:true 啟用路由追蹤
        // preloadingStrategy: environment.production ? PreloadAllModules : null // PreloadAllModules預先載入
      }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
