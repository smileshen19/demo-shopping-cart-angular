import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { PageTitleComponent } from './page-title/page-title.component';

@NgModule({
  declarations: [
    ItemCardComponent,
    PageTitleComponent
  ],
  exports: [
    ItemCardComponent,
    PageTitleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
