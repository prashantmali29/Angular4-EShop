import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/Database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule} from '@angular/router';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { environment } from './../environments/environment'

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service'
import {AuthGuardService} from './auth-guard.service'
import {UserService} from './user.service';
import {CategoryService} from './category.service'
import {ProductService} from './product.service'
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation';
import { DataTableModule } from 'angular-4-data-table';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ShoppingCartService} from './shopping-cart.service'

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    RegisterComponent,
    ProductFilterComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CustomFormsModule,
    DataTableModule,
    RouterModule.forRoot([
      {path: '',component: ProductsComponent},
      {path: 'products',component: ProductsComponent},
      {path: 'login',component: LoginComponent},
      {path: 'register',component: RegisterComponent},
      {path: 'shopping-cart',component: ShoppingCartComponent},

      {path: 'check-out',component: CheckOutComponent,canActivate:[AuthGuardService]},
      {path: 'order-success',component: OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path: 'my/orders',component: MyOrderComponent,canActivate:[AuthGuardService]},
      

      {path: 'admin/products/:id',component: ProductFormComponent,canActivate:[AuthGuardService]},
      {path: 'admin/products',component: AdminProductsComponent,canActivate:[AuthGuardService]},
      {path: 'admin/orders',component: AdminOrdersComponent,canActivate:[AuthGuardService]},
      {path: 'admin/products/new',component:ProductFormComponent,canActivate:[AuthGuardService]},
      
    ])

  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
