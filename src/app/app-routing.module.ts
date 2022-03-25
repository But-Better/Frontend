import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcShopComponent } from './alc-shop/alc-shop.component';
import { AlcoholFormComponent } from './alcohol-form/alcohol-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FoundAlcComponent } from './found-alc/found-alc.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { TranslatorComponent } from './translator/translator.component';

const routes: Routes = [
  { path: 'shop', component: AlcShopComponent },
  { path: 'newAlc', component: AlcoholFormComponent},
  { path: 'foundAlc/:id', component: FoundAlcComponent},
  { path: 'prodInfo', component: ProductinfoComponent},
  { path: 'calculator', component: CalculatorComponent},
  { path: 'translator', component: TranslatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
