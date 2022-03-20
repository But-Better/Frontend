import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlcShopComponent } from './alc-shop/alc-shop.component';
import { AlcoholFormComponent } from './alcohol-form/alcohol-form.component';
import { FoundAlcComponent } from './found-alc/found-alc.component';

const routes: Routes = [
  { path: 'shop', component: AlcShopComponent },
  { path: 'newAlc', component: AlcoholFormComponent},
  { path: 'foundAlc/:id', component: FoundAlcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
