import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AlcShopComponent } from './alc-shop/alc-shop.component';
import { HttpClientModule } from '@angular/common/http';
import { AlcoholService } from './service/alcohol.service';
import { AlcoholFormComponent } from './alcohol-form/alcohol-form.component';
import { FormsModule } from '@angular/forms';
import { FoundAlcComponent } from './found-alc/found-alc.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TranslatorComponent } from './translator/translator.component';
import { FoundProdInfoComponent } from './found-prod-info/found-prod-info.component';
import { ProdInfoFormComponent } from './prod-info-form/prod-info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AlcShopComponent,
    AlcoholFormComponent,
    FoundAlcComponent,
    ProductinfoComponent,
    CalculatorComponent,
    TranslatorComponent,
    FoundProdInfoComponent,
    ProdInfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlcoholService],
  bootstrap: [AppComponent]
})
export class AppModule { }
