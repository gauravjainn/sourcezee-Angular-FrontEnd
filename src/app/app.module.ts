import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductsingleComponent } from './components/store/productsingle/productsingle.component';
import { CartComponent } from './components/store/cart/cart.component';
import { CheckoutComponent } from './components/store/checkout/checkout.component';
import { ShopComponent } from './components/store/shop/shop.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrdersComponent } from './components/store/orders/orders.component';
import { LoginComponent } from './user/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './user/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductService } from './_services/product.service'; 
import { CategoryService } from './_services/category.service';
import { ServicesComponent } from './pages/services/services.component';
import { ManufacturComponent } from './pages/manufactur/manufactur.component'; 
import { JWTHttpInterceptor } from './interceptors/httpinterceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    DashboardComponent,
    OrdersComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ManufacturComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	SlickCarouselModule,
	FormsModule,
    ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [ProductService, CategoryService, { provide: HTTP_INTERCEPTORS, useClass: JWTHttpInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
