import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTopComponent } from './layout-top/layout-top.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutTopComponent, LayoutComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class LayoutModule { }
