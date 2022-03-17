import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcShopComponent } from './alc-shop/alc-shop.component';

const routes: Routes = [
  { path: 'shop', component: AlcShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
