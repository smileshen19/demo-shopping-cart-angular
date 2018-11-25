import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppService } from './service/app.service';
import { SellerAdminGuardService } from './service/seller-admin-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AppService,
    SellerAdminGuardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
