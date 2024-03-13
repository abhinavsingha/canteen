import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ShopComponent} from "./shop/shop.component";
import {ShopDetailComponent} from "./shop-detail/shop-detail.component";
import {CartComponent} from "./cart/cart.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent},
  {path:'shop-detail',component:ShopDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
