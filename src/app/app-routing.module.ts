import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsingleComponent } from './components/store/productsingle/productsingle.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './components/store/cart/cart.component';

import { CheckoutComponent } from './components/store/checkout/checkout.component';
import { ShopComponent } from './components/store/shop/shop.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './components/store/orders/orders.component';

import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

import { ServicesComponent } from './pages/services/services.component';
import { ManufacturComponent } from './pages/manufactur/manufactur.component';
import { AuthGuard } from './gaurds/auth.guard';
import { ListingComponent } from './pages/product/listing/listing.component';
import { DetailsComponent } from './pages/product/details/details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  //{ path: '', component: LoginComponent },
  { path: "product-single", component: ProductsingleComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "shop", component: ShopComponent },
  { path: "home", component: DashboardComponent },
  { path: "order", component: OrdersComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "services", component: ServicesComponent },
  { path: "manufactur", component: ManufacturComponent },
  { path: "product/listing", component: ListingComponent },
  { path: "product/details", component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
