import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { BuyerComponent } from './buyer.component';

const routes: Routes = [
  {
    path: '', component: BuyerComponent, children: [
      { path: '', redirectTo: 'items', pathMatch: 'full' },
      { path: 'items', component: ItemsComponent },
      { path: 'item/:id', component: ItemDetailComponent },
      { path: '**', redirectTo: 'items', pathMatch: 'full' } // 萬用路由
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyerRoutingModule { }
