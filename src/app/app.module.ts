import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AlcShopComponent } from './alc-shop/alc-shop.component';
import { HttpClientModule } from '@angular/common/http';
import { AlcoholService } from './service/alcohol.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AlcShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlcoholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
